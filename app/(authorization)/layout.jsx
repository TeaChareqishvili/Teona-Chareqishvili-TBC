export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="px-10 py-8 sm:px-16 sm:py-12 flex-1 w-full mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
