import NavbarItem from "../components/NavbarItem";

export const Navbar = () => {
  return (
    <div className="py-4">
      <ul className="flex flex-row  justify-between px-14 text-slate-50 tablet:px-8 mobile:px-4">
        <NavbarItem name="HOME" />
        <NavbarItem name="About" />
        <NavbarItem name="skills" />
        <NavbarItem name="projects" />
      </ul>
    </div>
  )
}