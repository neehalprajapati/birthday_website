import React from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
    const friends = [
        { name: "अथर्व (माजी अध्यक्ष)", img: "/images/friend1.png" },
        { name: "अनुप (अध्यक्ष)", img: "/images/friend2.png" },
        { name: "सुषांत (खजिनदार)", img: "/images/friend3.png" },
        { name: "जिग्नेश (सदस्य)", img: "/images/friend4.png" },
        { name: "ध्रुव (उपाध्यक्ष)", img: "/images/friend5.png" },
        { name: "नीहाल (सदस्य)", img: "/images/friend6.png" },
        { name: "आदित्य (सदस्य)", img: "/images/friend8.png" },
    ];

    return (
        <div className="birthday-page">
            {/* 🎊 Confetti Effect */}
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={350}
                recycle={true}
                gravity={0.3}
            />

            <div className="main-section">
                <div className="text-section">
                    <h1>
                        तो मुलगा ज्याने प्रत्येक मुलीच्या हृदयात खास जागा मिळवली 💖
                    </h1>
                    <p>
                        नेहमी हसतमुख, स्टायलिश आणि जिंदादिल 💫 <br />
                        तुझं व्यक्तिमत्वच असं आहे की जिथे जातोस तिथे धमाल होते 😎
                    </p>

                    <p className="wish-text">
                        आजच्या या खास दिवशी — <br />
                        देव तुझ्या आयुष्यात अपार यश, आनंद आणि प्रेमाची बरसात करो 💐 <br />
                        तुझ्या स्माईलने जग उजळून निघो 😁
                    </p>

                    <h2 className="final-wish">
                        🎉 हॅप्पी बर्थडे प्रथमेश! 🎉
                    </h2>

                    <p className="gang-text">
                        तुला <b><u>बुलेट गॅंग</u></b> कडून वाढदिवसाच्या लाख लाख शुभेच्छा! 🏍️🔥
                    </p>
                </div>

                <div className="image-section">
                    <img
                        src="/images/birthdayboy.png"
                        alt="Birthday Celebration"
                        className="main-image"
                    />
                </div>
            </div>

            <div className="friends-section">
                {friends.map((friend, index) => (
                    <div className="friend-card" key={index}>
                        <img src={friend.img} alt={friend.name} className="friend-img" />
                        <p className="friend-name">{friend.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;