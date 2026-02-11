import { Link } from 'react-router-dom';

type Breadcrumb = {
  label: string;
  href?: string;
};

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
  background?: 'orange' | 'gray';
}

export default function PageHeader({
  title,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  background = 'gray',
}: PageHeaderProps) {
  const bgClass =
    background === 'orange'
      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
      : 'bg-gray-900 text-white';

  return (
    <section className={`${bgClass} pt-32 pb-16`}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm md:text-base">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={index} className="flex items-center gap-2">
                  {crumb.href && !isLast ? (
                    <Link to={crumb.href} className="hover:text-orange-200 transition">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="opacity-80">{crumb.label}</span>
                  )}
                  {!isLast && <span className="opacity-50">/</span>}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
