export const metadata = {
   title: "YARA",
   description: "Nurturing the Next Generation of African Researchers",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}