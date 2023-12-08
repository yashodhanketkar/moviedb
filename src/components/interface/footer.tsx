const currentYear = new Date(Date.now()).getFullYear();

export const AppFooter = () => {
  return (
    <div className="p-2 grid md:grid-cols-2 w-full bg-neutral-950/50">
      <div>MovieDB</div>
      <div className="text-right">
        <ul className="text-sm">
          <li>Vercel</li>
          <li>TMDB</li>
        </ul>
      </div>
      <span className="col-span-2 text-xs text-center">
        ©2023{currentYear.toString() !== "2023" && `- ${currentYear}`} All
        rights reserved. MovieDB
      </span>
    </div>
  );
};
