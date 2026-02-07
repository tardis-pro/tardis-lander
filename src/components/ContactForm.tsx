import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  company: z.string().optional(),
  preferredDay: z.string().min(1, "Please choose a preferred day"),
  preferredTimeRange: z.string().min(1, "Please choose a preferred time range"),
  alternateSlotOne: z.string().min(5, "Please add first backup time option"),
  alternateSlotTwo: z.string().min(5, "Please add second backup time option"),
  alternateSlotThree: z.string().optional(),
  timezone: z.string().min(1, "Please add your timezone"),
  message: z.string().min(10, "Please share a bit more detail (min 10 chars)"),
  website: z.string().max(0).optional(), // honeypot field for bots
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const minDate = new Date().toISOString().slice(0, 10);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      preferredDay: "",
      preferredTimeRange: "",
      alternateSlotOne: "",
      alternateSlotTwo: "",
      alternateSlotThree: "",
      timezone: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      setSubmitting(true);
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | 'mnngoovr';
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | 'undefined';

      // drop if honeypot filled
      if (values.website) {
        console.warn("Honeypot triggered; aborting submission");
        return;
      }

      const targetEndpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : endpoint;

      if (targetEndpoint) {
        const res = await fetch(targetEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            company: values.company,
            preferredDay: values.preferredDay,
            preferredTimeRange: values.preferredTimeRange,
            alternateSlotOne: values.alternateSlotOne,
            alternateSlotTwo: values.alternateSlotTwo,
            alternateSlotThree: values.alternateSlotThree,
            timezone: values.timezone,
            message:
              `${values.message}\n\nScheduling Call Details:\n` +
              `- Preferred day: ${values.preferredDay}\n` +
              `- Preferred range: ${values.preferredTimeRange}\n` +
              `- Alternate option 1: ${values.alternateSlotOne}\n` +
              `- Alternate option 2: ${values.alternateSlotTwo}\n` +
              `- Alternate option 3: ${values.alternateSlotThree || "Not provided"}\n` +
              `- Timezone: ${values.timezone}`,
            _subject: "TARDIS Solutions - New inquiry",
          }),
        });
        if (!res.ok) throw new Error("Failed to submit form");
        toast.success("Thanks! We'll get back to you shortly.");
        form.reset();
        return;
      }

      // Fallback: open mailto with prefilled subject/body
      const subject = encodeURIComponent("TARDIS Solutions - New inquiry");
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "-"}` +
          `\nPreferred day: ${values.preferredDay}` +
          `\nPreferred range: ${values.preferredTimeRange}` +
          `\nAlternate option 1: ${values.alternateSlotOne}` +
          `\nAlternate option 2: ${values.alternateSlotTwo}` +
          `\nAlternate option 3: ${values.alternateSlotThree || "Not provided"}` +
          `\nTimezone: ${values.timezone}\n\n${values.message}`
      );
      window.location.href = `mailto:hello@tardis.digital?subject=${subject}&body=${body}`;
      toast.info("Opening your email client to send the message");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4" noValidate>
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@company.com" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Acme Inc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="preferredDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred day for call</FormLabel>
                <FormControl>
                  <Input type="date" min={minDate} {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredTimeRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred time range</FormLabel>
                <FormControl>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    {...field}
                    required
                  >
                    <option value="">Select a time range</option>
                    <option value="09:00-12:00">09:00-12:00</option>
                    <option value="12:00-15:00">12:00-15:00</option>
                    <option value="15:00-18:00">15:00-18:00</option>
                    <option value="18:00-21:00">18:00-21:00</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="alternateSlotOne"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Backup option 1</FormLabel>
                <FormControl>
                  <Input placeholder="Tue 2:00pm-4:00pm" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="alternateSlotTwo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Backup option 2</FormLabel>
                <FormControl>
                  <Input placeholder="Wed 11:00am-1:00pm" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="alternateSlotThree"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Backup option 3 (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Thu 4:00pm-6:00pm" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="timezone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timezone</FormLabel>
                <FormControl>
                  <Input placeholder="IST / UTC+05:30" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Honeypot field (hidden from users) */}
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="hidden" aria-hidden>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input tabIndex={-1} autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How can we help?</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Briefly describe your project, goal, and what success looks like"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between gap-4 pt-2">
          <p className="text-sm text-muted-foreground">Avg response time: under 1 business day</p>
          <Button type="submit" disabled={submitting} aria-label="Submit contact form">
            {submitting ? "Sending..." : "Send message"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
