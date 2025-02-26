export default function Link({
  to,
  cn,
  children,
}: {
  to: string;
  cn: CSSModuleClasses[string];
  children: React.ReactNode;
}) {
  function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey) {
      return;
    }
    event.preventDefault();

    window.history.pushState({}, "", to);
    const winEvent = new Event("popstate");
    window.dispatchEvent(winEvent);
  }

  return (
    <a href={to} className={cn} onClick={onClick}>
      {children}
    </a>
  );
}
