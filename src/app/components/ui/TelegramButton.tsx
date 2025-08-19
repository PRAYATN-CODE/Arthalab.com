import Image from "next/image";

const TelegramButton = () => {
    const telegramNumber = "9028880257"; // Replace with your Telegram number or group link
    const telegramLink = `https://t.me/+${telegramNumber}`; // For group link use your invite link

    return (
        <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-3 z-50 flex items-center justify-center animate-bounce duration-100 ease-out"
        >
            {/* Pulse animation */}
            <div className="absolute w-8 h-8 rounded-full bg-[#36aced] animate-ping transition-all duration-1000 ease-in-out"></div>

            {/* Main button */}
            <div className="relative w-12 h-12 hover:scale-105 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ease-out">
                <Image
                    src={'/logo/telegram.webp'}
                    alt="Telegram"
                    width={100}
                    height={100}
                    className="w-full h-full"
                />
            </div>
        </a>
    );
};

export default TelegramButton;
