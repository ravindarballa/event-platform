// Change function name to PascalCase
export function HallBookingTemplate({ title }: { title: string }) {
  return (
    <div className="wrapper">
       {/* ... your existing JSX ... */}
       <h1>Welcome {title} 👋</h1>
    </div>
  );
}

// Ensure default export matches
export default HallBookingTemplate;
