import { Link } from "react-router-dom";

export default function Button({ to, variant = "outline", children, ...props }) {
  const cls = `btn btn-${variant}`;
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  return <button className={cls} {...props}>{children}</button>;
}
