const HomePage = () => {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome to MyApp</h1>
      <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        This is a modern React + TypeScript starter template featuring a fully responsive layout, dark mode support and
        essential pages to help you kick off your next project with confidence.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-glow">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Responsive design</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Built mobile-first with TailwindCSS utility classes ensuring your experience is delightful on any device.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-glow">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Accessibility first</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Navigation, dark mode toggles and dialogs are implemented with accessibility best practices and screen reader support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
