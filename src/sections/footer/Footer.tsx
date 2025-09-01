import Button from "@/components/ui/Button";
import { footerLinks } from "@/data/footer/footer";
import { socialLinks } from "@/data/footer/socials";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative z-10 pt-[120px] lg:pt-[160px] pb-[98px] bg-light-grey lg:rounded-b-[80px] rounded-b-[40px] mobile_padding">
            <div className="lg:px-8 max-w-[400px] lg:max-w-[860px] mx-auto space-y-[100px]">
                <div className="w-full flex flex-col items-center gap-[30px]">
                    <h2 className="text-[60px] lg:text-7xl font-bold text-center">
                        Try Jitter today
                    </h2>
                    <p className="text-center text-lg max-w-[310px]">
                        No download, no install, no waiting. Start creating instantly.
                    </p>
                    <Button className="text-xl">Get started for free</Button>
                </div>

                <div className="max-w-[400px] lg:max-w-[860px] grid lg:grid-cols-5 grid-cols-2 gap-8 lg:py-12 py-7 text-sm">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h2 className="font-semibold text-lg text-dark mb-6">
                                {section.title}
                            </h2>
                            <ul className="space-y-4">
                                {section.items.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link}
                                            className="hover:opacity-50 transition_item duration-200 text-base text-nowrap"
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div>
                    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-base text-dark">
                            &copy; Jitter 2025. All rights reserved
                        </div>

                        <div className="flex space-x-4 mt-4 md:mt-0">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.url}
                                    aria-label={link.name}
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <Image
                                        src={link.icon}
                                        alt={link.name}
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto px-4 mt-[60px]">
                        <p className="text-xs text-gray-600 leading-[150%] max-w-4xl">
                            All featured work on this website is presented for illustrative
                            purposes only, showcasing real-life examples of motion design.
                            Jitter does not claim ownership of any of the displayed works. All
                            rights remain with their respective creators. Logos, assets, and
                            other branded content are the property of their original owners
                            and are not to be used, reproduced, or redistributed. If you are
                            the rightful owner of any content and would like it credited
                            differently or removed, please contact us at support@jitter.video
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
