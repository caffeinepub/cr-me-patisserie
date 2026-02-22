import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Send } from 'lucide-react';
import { useSubmitCustomerQuery } from '@/hooks/useQueries';
import { toast } from 'sonner';

export default function CustomerQuerySection() {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const submitQuery = useSubmitCustomerQuery();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !question) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      await submitQuery.mutateAsync({ email, question });
      toast.success('Thank you! We\'ll get back to you soon.');
      setEmail('');
      setQuestion('');
    } catch (error) {
      toast.error('Failed to submit query. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blush/30 mb-6">
              <MessageCircle className="w-8 h-8 text-chocolate" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-chocolate mb-4">
              Have a Question?
            </h2>
            <p className="text-chocolate/70 text-lg">
              We'd love to hear from you. Send us your query and we'll respond as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-cream rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-chocolate font-semibold mb-2 block">
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-chocolate/20 focus:border-chocolate text-chocolate rounded-xl h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="question" className="text-chocolate font-semibold mb-2 block">
                  Your Question
                </Label>
                <Textarea
                  id="question"
                  placeholder="Tell us what you'd like to know..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="bg-white border-chocolate/20 focus:border-chocolate text-chocolate rounded-xl min-h-[150px] resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitQuery.isPending}
                className="w-full bg-gold hover:bg-gold/90 text-chocolate font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-md"
              >
                {submitQuery.isPending ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Query
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
