import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", values);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      let errorMessage = "Something went wrong. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary inline-block pb-2 border-b-4 border-secondary">Get In Touch</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-background p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Me a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
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
                          <Input placeholder="your.email@example.com" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            rows={5} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          {/* Contact Information - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-background p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4 p-2">
                    <img src="https://i.postimg.cc/kXyKM4bT/image.png" alt="Email" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <a href="mailto:siddhanthjain09@gmail.com" className="text-accent hover:underline">
                      siddhanthjain09@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4 p-2">
                    <img src="https://i.postimg.cc/zGXWyrw8/image.png" alt="Phone" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <a href="tel:+19718953121" className="text-accent hover:underline">
                      +1 971-895-3121
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mr-4 p-2">
                    <img src="https://i.postimg.cc/3NT0Y5JM/image.png" alt="Location" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p>Portland, Oregon</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-foreground mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/siddhanth2001"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="GitHub"
                      className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="mailto:siddhanthjain09@gmail.com" 
                      aria-label="Email"
                      className="w-10 h-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
