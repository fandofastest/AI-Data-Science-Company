import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="text-center px-4">
        <div className="inline-flex p-4 rounded-full bg-blue-100 mb-6">
          <Search className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600">
          <Link to="/">
            <Home className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
