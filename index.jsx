import { useState, useEffect, useRef, Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import OrderNavbar from "../components/common/navbars/order-navbar";
import OrderHeader from "../components/order-page/order-header";
import OrderMenu from "../components/order-page/order-menu";
import ItemCards from "../components/order-page/components/item-cards.component";
import RestaurantInfoModal from "../components/order-page/components/restaurant-info-modal.component";
import MenuSelect
 from "../components/order-page/components/menu-select.component";
const tabs = [
    { name: "Chicken", href: "#applied", current: false },
    { name: "Dinner", href: "#phone-screening", current: false },
    { name: "Burgers", href: "#interview", current: true },
    { name: "Fries", href: "#offer", current: false },
    { name: "Subs", href: "#hired", current: false },
];

const menus = [
    { name: 'All Day Menu', value: 'all_day_menu' },
    { name: 'Breakfast Menu', value: 'breakfast_menu' },
    { name: 'Lunch Menu', value: 'lunch_menu' },
  ];
  
// Utility function to join class names
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [currentTab, setCurrentTab] = useState(
        tabs.findIndex((tab) => tab.current)
    );

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

    return (
        <>
            <div className="sticky top-0 z-10">
                <OrderNavbar />
            </div>
			<div className="bg-gray-50"> 			<OrderHeader />
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

											<MenuSelect />
                                   
                                        </div>
                                        {/* Tabs */}
                                        <div className="container mx-auto mt-4 ">
                                            <nav className="-mb-px flex overflow-x-auto">
                                                {tabs.map((tab, i) => (
                                                    <a
                                                        key={tab.name}
                                                        className={classNames(
                                                            i === currentTab
                                                                ? "border-menured-600 text-menured-600"
                                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                                                            "whitespace-nowrap pb-4 px-3 border-b-4 rounded font-semibold font-poppins text-xs"
                                                        )}
                                                        onClick={() => {
                                                            setCurrentTab(i);
                                                            window.scrollTo({
                                                                top:
                                                                    sections
                                                                        .current[
                                                                        i
                                                                    ]
                                                                        .offsetTop -
                                                                    100,
                                                                behavior:
                                                                    "smooth",
                                                            });
                                                        }}
                                                    >
                                                        {tab.name}
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        {tabs.map((tab, i) => (
                                            <div
                                                key={tab.name}
                                                ref={(el) => {
                                                    sections.current[i] = el;
                                                }}
                                            >
                                                <h4
                                                    id={tab.href.substr(1)}
                                                    className="pt-8 font-poppins font-semibold text-lg text-gray-900"
                                                >
                                                    {tab.name}
                                                </h4>
                                                <div className="pt-3">
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
                    <div className="p-6">{
						<div className="flex flex-col">

						</div>

					}</div>
                  </div>
                </section>
              </div>
                </div>
            </div>
        </>
    );
}
