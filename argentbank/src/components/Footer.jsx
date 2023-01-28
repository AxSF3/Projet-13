export default function Footer() {
  let actualYear = new Date();
  return (
    <footer className="footer">
      <p className="footer-text">Copyright {actualYear.getFullYear()} Argent Bank</p>
    </footer>
  );
}
