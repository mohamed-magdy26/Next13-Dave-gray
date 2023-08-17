export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <footer className='bg-black text-2xl text-white text-center'>
        About footer
      </footer>
    </>
  );
}
