import Image from "next/image";

export default function SocialLink() {
    return (
        <ul className="flex items-center mt-8">
            <li className="mr-5 text-sx">
                <a className="block" href="https://github.com/JacobChen22" target="_blank">
                    <Image
                        src="/github.svg"
                        alt="Github Logo"
                        width={34}
                        height={34}
                    />
                </a>
            </li>
            <li className="mr-5 text-sx">
                <a href="https://www.linkedin.com/in/jacobchen22/" target="_blank">
                    <Image
                        src="/linkedin.svg"
                        alt="LinkedIn Logo"
                        width={34}
                        height={34}
                    />
                </a>
            </li>
        </ul>
    )
}