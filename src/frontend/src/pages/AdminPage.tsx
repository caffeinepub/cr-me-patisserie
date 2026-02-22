import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useIsAdmin } from '../hooks/useAuth';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminPage() {
  const { identity } = useInternetIdentity();
  const { data: isAdmin, isLoading: isAdminLoading } = useIsAdmin();

  // Show loading state while checking admin status
  if (isAdminLoading || !identity) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-6">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  // Show access denied if not admin or not authenticated
  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-cream border-blush shadow-lg">
            <CardContent className="pt-12 pb-12">
              <h1 className="font-serif text-4xl text-chocolate mb-4">Access Denied</h1>
              <p className="text-chocolate/70 text-lg">
                You don't have permission to access the admin section.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-serif text-5xl text-chocolate mb-4">Admin Dashboard</h1>
          <p className="text-chocolate/70 text-lg">
            Welcome to the admin section.
          </p>
        </div>

        <Card className="bg-cream border-blush shadow-md">
          <CardContent className="pt-12 pb-12 text-center">
            <h2 className="font-serif text-2xl text-chocolate mb-2">Admin Panel</h2>
            <p className="text-chocolate/60">
              Admin functionality can be added here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
