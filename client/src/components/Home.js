
import React from "react";
import {BackgroundBeams} from "../components/ui/BackgroundBeams.js";
import {FlipWords} from "../components/ui/FlipWords.js";
function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-black">
            
            <BackgroundBeams className="z-0" />

            <div className="text-center">
                <h1 className="text-5xl font-bold justify-center flex-wrap">
                  <FlipWords                     
                    words = {
                      ["Welcome,", "Bienvenido/a,", "Bienvenue,", "Willkommen,", "Benvenuto/a,", "Bem-vindo/a,", "Welkom,", "Välkommen,", 
                      "Добро пожаловать,", "ようこそ,", "欢迎,", "환영합니다,", "أهلاً وسهلاً,", "स्वागत है,", "Hoş geldiniz,", "Witamy,", 
                      "ยินดีต้อนรับ,", "Chào mừng,", "Selamat datang,", "Tervetuloa,", "Vítejte,", "Üdvözöljük,", "Bine ati venit,", 
                      "Καλώς ήρθατε,", "Dobrodošli,", "Maligayang pagdating,", "Karibu,", "Welkom,", "Xoş gəlmişsiniz,", "Dobrodošli,", 
                      "Добре дошли,", "Benvingut/a,", "Dobrodošli,", "Velkommen,", "Tere tulemast,", "გეთა,", "Laipni lūdzu,", 
                      "Sveiki,", "Добре дојдовте,", "Velkommen,", "خوش آمدید,", "Vitajte,", "Dobrodošli,", "خوش آمدید,", "Вітаю,"]
                    }
                    className="text-5xl text-white font-bold">

                  </FlipWords>
                    <span>I Am Tristan Fry</span>
                </h1>
                <p className="mt-4 text-lg">Learn more about me, my projects and skills below.</p>
            </div>
        </section>
    );
}

export default Home;

