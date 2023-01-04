import React from 'react';
import {Link} from 'react-router-dom'
import FeedCard from '../components/FeedCard';

function Home() {

    const gallery = [
        {img: '/images/pic-3.jpg'},
        {img: '/images/pic-6.jpg'},
        {img: '/images/pic-7.jpg'},
        {img: '/images/pic-8.jpg'},
        {img: '/images/pic-9.jpg'},
        {img: '/images/pic-10.jpg'},
        {img: '/images/pic-11.jpg'},
        {img: '/images/pic-12.jpg'},
        {img: '/images/pic-13.jpg'},
        {img: '/images/pic-18.jpg'},
        {img: '/images/pic-15.jpg'},
        {img: '/images/pic-16.jpg'},
        {img: '/images/pic-12.jpg'},
        {img: '/images/pic-19.jpg'},
        {img: '/images/pic-20.jpg'},
        {img: '/images/pic-21.jpg'},
        {img: '/images/pic-22.jpg'},
        {img: '/images/pic-23.jpg'},
        {img: '/images/pic-24.jpg'},
        {img: '/images/pic-25.jpg'},
        {img: '/images/pic-9.jpg'},
        {img: '/images/pic-18.jpg'},
        {img: '/images/pic-10.jpg'},
    ]
 
    const about = [
        {lbl: "Une experience du milleu entirerement dedie a ton projet", txt: 'Seul ou un groupe, profite d’un accompagnement personnalisé et d’une solution entièrement dédié à la création de ton projet musical', img: '/images/users.svg'},
        {lbl: "Une reponse obtimissee a tous tes besoins", txt: 'Ton projet musical est à portée de clic. Profite de l’expérience et du service RekYou pour trouver le studio qui te correspond en participant au Quizz Musical Project', img: '/images/menu-a.svg'},
        {lbl: "100 % flexible", txt: 'RekYou s’adapte à tes besoins afin de te fournir le meilleur service possible. Toi seul contrôle ton projet.', img: '/images/menu-b.svg'},
    ]
    const steps = [
        {step: '1', tag: 'ère', lbl: 'Etape', icon: '/images/music-a.svg', txt: 'Remplis le quizz afin de bénéficier d’une solution personnalisée grâce à l’algorythme le plus optimisé pour le marché des studios d’enregistrement'},
        {step: '2', tag: 'ème', lbl: 'Etape', icon: '/images/music-b.svg', txt: 'Rends toi en studio et dévoile ton véritable potentiel d’artiste grâce à l’accompagnement de RekYou et de nos ingénieurs du son partenaraires'},
        {step: '3', tag: 'ème', lbl: 'Etape', icon: '/images/music-c.svg', txt: 'Distribue ton titre aux yeux du monde sur toutes les plateformes de streaming'},
        {step: '4', tag: 'ème', lbl: 'Etape', icon: '/images/music-d.svg', txt: 'Reçois des retours de professionnels et fait toi remarquer sur les réseaux sociaux grâce à une stratégie de promotion pertinente et adapté pour vous'},
    ]
    const feedsleft= [
        {nam: 'Bulle', img: '/images/pic-1.jpg', txt: 'Super expérience, très bien accompagné par RekYou, c’est les meilleurs vraiment, j’ai été guidé, accompagné en studio et c’était la meilleur expérience de ma vie'},
        {nam: 'Aminata', img: '/images/pic-1.jpg', txt: 'Je n’avais jamais fait de musique avant et vraiment, j’ai trop aimé quoi ! Merci RekYou'},
    ]
    const feedsright = [
        {nam: 'Opak', img: '/images/pic-1.jpg', txt: 'Plus de 3 titres déjà réalisé avec eux et vraiment toujours aussi carré !'},
        {nam: 'Clara', img: '/images/pic-1.jpg', txt: 'Je remercie vraiment RekYou pour leur professionalisme et l’aide qu’ils m’ont apportés sur mon projet. J’étais vraiment hésitante début je pratique la guitare voix, mais je ne savais pas si j’étais capable de faire une chanson même si c’était mon rêve. Mais grâce au conseil et à l’assistance de RekYou j’ai réussi et je suis super contente. Merci encore RekYou !'},
    ]
    const feedscenter = [
        {nam: 'Mojane', img: '/images/pic-1.jpg', txt: 'C’est vraiment trop bien ! Profitez d’expert comme eux pour te conseiller et même être aider dans les démarches'},
    ]
    const date = new Date()
    

    return (
        <div className='home-p'>
            {/* Section A */}
            <div className='sect-a'>
                <div className='blk intro flex flex-col'>
                    <div className='title font s32 b7 color'>TON PROJET MUSICAL EST UN RÊVE,<br/> FAIS EN UNE RÉALITE</div>
                    <div className='txt font s18 b5 c000'>Découvre gratuitement en quelques clics le coût de la réalisation du projet musical de tes rêves</div>
                    <button className='cleanbtn btn font s15 b5 cfff anim'>Je découvre</button>
                </div>
                {
                    gallery.map((item,index) => (
                        <div className='blk' style={{backgroundImage: `url(${item.img})`}}  />
                    ))
                }
            </div> 

            {/* Section B */}
            <div className='sect-b flex flex-col wrapper'>
                <div className='title font s26 b7 c000'>RekYou c’est une équipe de professionnels passionnés par la création musicale</div>
                <div className='wrap flex'>
                    {
                        about.map(item => (
                            <div className='blk flex flex-col aic'>
                                <div className='icon flex aic'><img src={item.img} className='img'/></div>
                                <div className='lbl font s15 b7 c000'>{item.lbl}</div>
                                <div className='txt font s15 c333'>{item.txt}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        
            {/* Section C */}
            <div className='sect-c flex aic'>
                <div className='txt font s16 b6 cfff'><span className='num s28'>+15 000</span>&nbsp;projets en cours</div>
            </div>
        
            {/* Section D */}
            <div className='sect-d'>
                <div className='wrapper flex'>
                    <div className='cart flex flex-col aic'>
                        <div style={{backgroundImage: `url(/images/pic-1.jpg)`}}  className='dp'/>
                        <div className='nam font s15 b6 cfff'>Clara</div>
                        <div className='role font s13 cfff'>Experte RekYou</div>
                        <div className='txt font s13 cfff'>Nos experts sont prêts à vous accompagner tout au long de ton projet</div>
                        <button className='cleanbtn btn font s14 b7 color anim'>Estimer mon projet</button>
                    </div>
                    <div className='content flex flex-col rel'>
                        <div className='steps flex aic'>
                        {
                            steps.map((item,index) => (
                                <div key={index} className='blk flex'>
                                    <div className='lit flex flex-col aic'>
                                        <div className='sr font s38 b7 red'>{item.step}</div>
                                        <div className='line'/>
                                        <img src={item.icon} className='icon'/>
                                    </div>
                                    <div className='rit flex flex-col'>
                                        <div className='tag font s13 red'>{item.tag}</div>
                                        <div className='lbl font s18 b6 red'>{item.lbl}</div>
                                        <div className='txt font s12 b5 red'>{item.txt}</div>
                                    </div>
                                </div>  
                            ))
                        }
                        </div>
                        <div className='lines flex flex-col'>
                            <div className='line'/>
                            <div className='line'/>
                            <div className='line'/>
                            <div className='line'/>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* Section E */}
            <div className='sect-e'>
                <div className='wrapper flex aic'>
                    <div className='lit flex flex-col'>
                        <div className='title font s26 b7 c000'>De nombeux partenaires nous accompagne <span className='color'>dans notre volonté de mener votre projet à sa réussite</span></div>
                        <div className='txt font s15 b5 c000'>RekYou travaille avec les meilleurs acteurs de chaque étape de projet. Production, distribution, promotion, tout a été conçu et optimisé afin que vous puissiez au mieux vous concentrer uniquement sur la réalisation de votre projet.</div>
                    </div>
                    <div className='rit'>
                        <div className='container'>
                            <div className='item flex aic'><img src="/images/base-music.png" className='img'/></div>
                            <div className='item flex aic'><img src="/images/spinnup-logo.png" className='img'/></div>
                            <div className='item flex aic'><img src="/images/tunecore.svg" className='img'/></div>
                            <div className='item flex aic'><img src="/images/groover-logo.svg" className='img'/></div>
                            <div className='item flex aic'><img src="/images/adace-music.png" className='img'/></div>
                            <div className='item flex aic'><img src="/images/logo-r.png" className='img'/></div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* Section F */}
            <div className='sect-f'>
                <div className='wrapper flex flex-col'>
                    <div className='title font s24 b6 cfff'>Les artistes aussi parlent de nous</div>
                    <div className='title font s24 b6 cfff'>Qui de mieux qu’un artiste pour parler à un artiste</div>
                    <div className='container flex'>
                        <div className='lit flex flex-col'>
                            {
                                feedsleft.map(item => (
                                    <div className='item'><FeedCard data={item}/></div>
                                ))
                            }
                        </div>
                        <div className='center flex flex-col'>
                            <div className='banner' style={{backgroundImage: 'url(/images/pic-14.jpg)'}}/>
                            { 
                                feedscenter.map(item => (
                                    <div className='item'><FeedCard data={item}/></div>
                                ))
                            } 
                        </div>
                        <div className='rit flex flex-col'>
                            {
                                feedsright.map(item => (
                                    <div className='item'><FeedCard data={item}/></div>
                                ))
                            } 
                        </div>
                    </div>
                    <div className='ftr'>
                        <div className='row flex aic'>
                            <Link to="/" className='txt font s15 b7'>Découvre</Link>
                            <Link to="/" className='txt font s15'>À propos</Link>
                            <Link to="/" className='txt font s15'>Blog</Link>
                            <Link to="/" className='txt font s15'>Aide et assistance</Link>
                            <Link to="/" className='txt font s15'>Politique des données RGPD</Link>
                        </div>
                        <div className='row flex aic'>
                            <Link to='/' className='item'><img src="/images/logo.png" className='logo'/></Link>
                            <div className='cpy font s13'>&copy; <span>{date.getFullYear()}</span> - Rekyou. Tous droits reéservés</div>
                            <div className='item flex aic'>
                                <a href="/" target="_blank" className='social'><img src="/images/facebook.png" className='icon'/></a>
                                <a href="/" target="_blank" className='social'><img src="/images/instagram.png" className='icon'/></a>
                                <a href="/" target="_blank" className='social'><img src="/images/twitter.png" className='icon'/></a>
                            </div>
                        </div>
                    </div>
               </div> 
            </div>
        </div>
    );
} 
 
export default Home;