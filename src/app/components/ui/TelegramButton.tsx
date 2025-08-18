import Image from "next/image";

const TelegramButton = () => {
    const telegramNumber = "9028880257"; // Replace with your Telegram number or group link
    const telegramLink = `https://t.me/+${telegramNumber}`; // For group link use your invite link

    return (
        <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-6 z-50 flex items-center justify-center"
        >
            {/* Pulse animation */}
            <div className="absolute w-12 h-12 rounded-full bg-[#36aced] animate-ping transition-all duration-1000 ease-in-out"></div>

            {/* Main button */}
            <div className="relative w-12 h-12 bg-[#36aced] hover:bg-[#36aced]/60 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ease-out">
                <Image
                    src={'/logo/telegram.webp'}
                    alt="Telegram"
                    width={100}
                    height={100}
                    className="w-[90%] h-[90%]"
                />
            </div>
        </a>
    );
};

export default TelegramButton;
