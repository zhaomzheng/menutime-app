import { useState, useEffect, useRef, Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import OrderNavbar from "../components/common/navbars/order-navbar";
import OrderHeader from "../components/order-page/order-header";
import OrderMenu from "../components/order-page/order-menu";
import ItemCards from "../components/order-page/components/item-cards.component";
import RestaurantInfoModal from "../components/order-page/components/restaurant-info-modal.component";
import MenuSelect from "../components/order-page/components/menu-select.component";

const menus = [
  {
    menuName: 'Lunch Menu',
    startTime: '12:00PM',
    endTime: '12:00PM',
    menuCategories: [
        {
        categoryName: "Eggs", 
        categoryAvailable: true
        },
        {
        categoryName: "Omelettes", 
        categoryAvailable: true
        },
        {
        categoryName: "Pancakes", 
        categoryAvailable: true
        },
        {
        categoryName: "Waffles", 
        categoryAvailable: true
        },
        {
        categoryName: "Sides", 
        categoryAvailable: true
        },
    ]
  },
  {
    menuName: 'Dinner Menu',
    startTime: '12:00PM',
    endTime: '12:00PM',
    menuCategories: [
        {
        categoryName: "Appetizers", 
        categoryAvailable: true
        },
        {
        categoryName: "Entrees", 
        categoryAvailable: true
        },
        {
        categoryName: "Sides", 
        categoryAvailable: true
        },
        {
        categoryName: "Desserts", 
        categoryAvailable: true
        },
    ]
  },
];

// Utility function to join class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [currentMenu, setCurrentMenu] = useState(menus[0]);
  const [currentTab, setCurrentTab] = useState(0);

  // Ref for sections
  const sections = useRef([]);

  // State for sticky header
  const [isSticky, setSticky] = useState(false);

  // Effect to handle window scroll event
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;

      for (let i = 0; i < sections.current.length; i++) {
        if (scrollY >= sections.current[i].offsetTop - 200) {
          setCurrentTab(i);
        }
      }

      if (sections.current[0].offsetTop - 250 <= scrollY) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuSelect = (selectedMenu) => {
    setCurrentMenu(selectedMenu);
  };

  return (
    <>
      <div className="sticky top-0 z-10">
        <OrderNavbar />
      </div>
      <div className="bg-gray-50">
        {" "}
       
        <OrderHeader />
        </div>
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Page title</h1>
        {/* Main 3 column grid */}
        <div class="pt-4 grid grid-cols-1  items-start gap-4 lg:grid-cols-3 lg:gap-8">
          {/* Left column */}
          <div class="   sticky grid grid-cols-1 gap-4 lg:col-span-2 left-column left-column-width">
            <section aria-labelledby="sectioan-1-title">
              <h2 class="sr-only" id="section-1-title">
                Section title
              </h2>
              <div class=" rounded-lg  bg-white ">
                <div class="sticky top-0 pt-2">
                  <div className="sticky top-16 z-10 bg-white border-b border-gray-200">
                    {/* Search Bar and Menu Toggle */}
                    <div
                      className={
                        "container mx-auto md:flex md:items-center md:justify-between py-4 "
                      }
                    >
                      <MenuSelect
                        menus={menus}
                        onChange={handleMenuSelect}
                      />
                      
                    </div>
                    {/* Tabs */}
                    <div className="container mx-auto mt-4 ">
                      <nav className="-mb-px flex overflow-x-auto">
                        {currentMenu.menuCategories.map((category, i) => (
                          <a
                            key={category.categoryName}
                            className={classNames(
                              i === currentTab
                                ? "border-menured-600 text-menured-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "whitespace-nowrap pb-4 px-3 border-b-4 rounded font-semibold font-poppins text-xs"
                            )}
                            onClick={() => {
                              setCurrentTab(i);
                              window.scrollTo({
                                top: sections.current[i].offsetTop - 100,
                                behavior: "smooth",
                              });
                            }}
                          >
                            {category.categoryName}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="pt-2">
                    {currentMenu.menuCategories.map((category, i) => (
                      <div
                        key={category.categoryName}
                        ref={(el) => {
                          sections.current[i] = el;
                        }}
                      >
                        <h4
                          id={category.categoryName}
                          className="pt-8 font-poppins font-semibold text-lg text-gray-900"
                        >
                          {category.categoryName}
                        </h4>
                        <div className="pt-3">
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {/* Render item cards for this category here */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">
              <h2 className="sr-only" id="section-2-title">
                Section title
              </h2>
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="p-6">
          
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
