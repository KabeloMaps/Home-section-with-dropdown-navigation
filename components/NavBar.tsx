import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "Features",
    children: [
      { name: "Todo List", href: "#", icon: "/images/icon-todo.svg" },
      { name: "Calender", href: "#", icon: "/images/icon-calendar.svg" },
      { name: "Reminders", href: "#", icon: "/images/icon-reminders.svg" },
      { name: "Planning", href: "#", icon: "/images/icon-planning.svg" },
    ],
  },
  {
    name: "Company",
    children: [
      { name: "History", href: "#", icon: "/images/icon-history.svg" },
      { name: "Our Team", href: "#", icon: "/images/icon-team.svg" },
      { name: "Blog", href: "#", icon: "/images/icon-blog.svg" },
    ],
  },
  { name: "Careers", href: "#" },
  { name: "About", href: "#" },
];

const AuthButtons = ({ className = "" }) => (
  <div className={`flex gap-4 ${className}`}>
    <a href="/login">Login</a>
    <a href="/register" className="border border-black rounded-xl px-4 py-1">
      Register
    </a>
  </div>
);

const NavBar = () => {
  return (
    <Disclosure as="nav" className="relative  bg-white">
      {({ open }) => (
        <div>
          {" "}
          <div className="px-2  sm:px-6 lg:px-8">
            <div className="relative flex-col-reverse h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:hidden">
                <DisclosureButton className="fixed top-4 right-4 z-50 sm:hidden">
                  {open ? (
                    <XMarkIcon className="size-10" />
                  ) : (
                    <img src="/images/icon-menu.svg" className="size-8" />
                  )}
                </DisclosureButton>
              </div>

              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex shrink-0">
                  <img
                    alt="snap-logo"
                    src="/images/logo.svg"
                    className="h-auto w-auto pl-2 pt-6"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    {navigation.map((item) =>
                      item.children ? (
                        <Menu key={item.name} as="div" className="relative">
                          <MenuButton className="font-medium flex items-center gap-1">
                            {item.name}
                          </MenuButton>

                          <MenuItems className="absolute left-0 mt-2 w-44 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            {item.children.map((child) => (
                              <MenuItem key={child.name}>
                                {({ active }) => (
                                  <a
                                    href={child.href}
                                    className={`block px-4 py-2 text-sm ${
                                      active ? "bg-gray-100" : ""
                                    }`}
                                  >
                                    {child.name}
                                  </a>
                                )}
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Menu>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className="font-medium"
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>

                  <div className="hidden sm:flex ml-auto items-center ">
                    <AuthButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel
            className="
    fixed inset-y-0 right-0 z-40
    w-3/4 max-w-sm
    bg-white shadow-xl
    sm:hidden
data-closed:translate-x-ful   data-open:translate-x-0
  "
          >
            <div className="flex flex-col gap-6 pt-20 p-5 ">
              {navigation.map((item) =>
                item.children ? (
                  <Disclosure key={item.name}>
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center gap-6 text-lg font-medium">
                          {item.name}
                          <span className="">
                            {open ? (
                              <img src="/images/icon-arrow-up.svg" alt="" />
                            ) : (
                              <img src="/images/icon-arrow-down.svg" alt="" />
                            )}
                          </span>
                        </DisclosureButton>

                        <DisclosurePanel className="pl-4 flex flex-col gap-2">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="text-gray-700"
                            >
                              {child.name}
                            </a>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium"
                  >
                    {item.name}
                  </a>
                )
              )}

              <div className="flex flex-col  gap-6">
                {" "}
                <a href="/register" className=" rounded-xl p-2 text-center">
                  {" "}
                  Login
                </a>
                <a
                  href="/register"
                  className="border border-black rounded-xl p-2 text-center"
                >
                  Register
                </a>
              </div>
            </div>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
};

export default NavBar;
