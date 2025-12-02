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
  message: z.string().min(10, "Please share a bit more detail (min 10 chars)"),
  website: z.string().max(0).optional(), // honeypot field for bots
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", message: "", website: "" },
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
            message: values.message,
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
        `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "-"}\n\n${values.message}`
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
                <Textarea rows={5} placeholder="Briefly describe your project or question" {...field} required />
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
