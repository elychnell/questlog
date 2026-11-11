import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function NotFoundPage() {
return (
<section>
  <Link to="/" className="flex items-center gap-2 text-text-secondary transition-colors hover:text-primary">
    <ArrowLeft size={16} />
    <span>Back to games</span>
  </Link>
  <h1 className="font-bold text-center mt-0.25">404 – Page not found</h1>
</section>);
}

export default NotFoundPage;