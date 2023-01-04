import React,{useState, useEffect} from 'react';

function Quizz() {

    const [step, setStep] = useState(1)
    const [youAre, setYouAre] = useState('')
    const [memebers, setMembers] = useState('')
    const [musicalGenre, setMusicalGenre] = useState('')
    const [musicalProject, setMusicalProject] = useState('')
    const[numberOfTitle, setNumberOfTitle] = useState('')
    const [featuring, setFeaturing] = useState('')
    const [yourProject, setYourProject] = useState('')
    const [missing, setMissing] = useState('')
    const [instrument, setInstrument] = useState('')
    const [instrumentValid, setInstrumentValid] = useState(false)
    
    const [firstOption, setFirstOption] = useState('')
    const [dropfirstOption, setDropfirstOption] = useState(false)
    const [secondOption, setSecondOtpion] = useState('')
    const [dropSecondOption, setDropSecondOption] = useState(false)
    const [thirdOption, setThirdOption] = useState('')
    const [dropThirdOption, setDropThirdOption] = useState(false)

    const _musicalGenre = [
        {label: 'Rock'}, 
        {label: 'Hip-Hop / Rap'}, 
        {label: "Chansons/Variétés françaises"}, 
        {label: "Reggae/Dancehall"}, 
        {label: "Alternative"}, 
        {label: "Jazz"}, 
        {label: "Electro"}, 
        {label: "Musiques Afro"}, 
        {label: "Musiques Latines"}, 
        {label: "Je ne sais pas le définir"}, 
    ]
    const _musicalProject = [
        {label: 'Single', img: '/images/pic-2.jpg'},
        {label: 'EP', img: '/images/pic-3.jpg'},
        {label: 'Album', img: '/images/pic-4.jpg'},
        {label: 'Mixtape', img: '/images/pic-5.jpg'},
    ]
    const _yourProjects = [
        {label: 'Je veux réaliser un projet musical mais je n’ai pas de projet précis'},
        {label: 'Tout est dans la tête mais il manque encore des éléments (instrumentals, musiciens, paroliers...)'},
        {label: 'Tout est prêt, je peux commencer'},
        {label: 'J’ai déjà commencé à enregistrer'},
    ]
    const _missing = [
        {label: 'Des instrumentales', img: '/images/pic-2.jpg'},
        {label: 'Un Directeur Artistique', img: '/images/pic-3.jpg'},
        {label: 'Un compositeur', img: '/images/pic-4.jpg'},
        {label: 'Un parolier', img: '/images/pic-5.jpg'},
    ]
    const _yourInstrumental  = [
        {label: 'Youtube', img: '/images/pic-2.jpg'},
        {label: 'J’achète mes prods', img: '/images/pic-3.jpg'},
        {label: 'J’ai mon propre beatmaker', img: '/images/pic-4.jpg'},
        {label: 'Je fais mes prods', img: '/images/pic-5.jpg'},
    ]
    const _firstOptions = [
        {label: 'Distribution à des professionnels'},
        {label: 'Promotion sur les réseaux sociaux'},
        {label: 'Mise en playlist personnalisée'},
        {label: 'Interview pour le lancement'},  
    ]
    const _secondOptions = [
        {label: 'Distribution à des professionnels'},
        {label: 'Promotion sur les réseaux sociaux'},
        {label: 'Mise en playlist personnalisée'},
        {label: 'Interview pour le lancement'},  
    ]
    const _thirdOptions = [
        {label: 'Distribution à des professionnels'},
        {label: 'Promotion sur les réseaux sociaux'},
        {label: 'Mise en playlist personnalisée'},
        {label: 'Interview pour le lancement'},  
    ]
    const _availabilities = [
        {label: 'Tout le temps'},
        {label: 'La journée uniquement'},
        {label: 'Le soir uniquement'},
        {label: 'Que le week-end'},
    ]

    useEffect(() => {
        document.body.addEventListener("click", ()=> {
            setDropfirstOption(false)
            setDropSecondOption(false)
        })
    },[])

    const _questions = () => {
        switch(step){
            case 1: 
                return step1()
            case 2:
                return step2()
            case 3:
                return step3()
            case 4:
                return step4()
            case 5:
                return step5() 
            case 6:
                return step6()    
            case 7:
                return step7()       
            case 8:
                return step8()           
            case 9:
                return step9()   
            case 10:
                return step10()   
            case 11:
                return step11()  
            case 12:
                return step12()  
            case 13:
                return step13()  
            case 14:
                return step14()  
            case 15:
                return step15()  
            case 16:
                return step16() 
            case 17:
                return step17() 
            case 18:
                return step18() 
            case 19:
                return step19() 
            case 20:
                return step20() 
            case 21:
                return step21() 
            case 22:
                return step22() 
            case 23:
                return step23() 
            case 24:
                return step24()
            case 25:
                return step25()
            case 26:
                return step26()
            case 27:
                return step27()
            case 28:
                return step28()
            case 29:
                return step29()
            default:
                return step1()
        }
    }

    const step1 = () => {
        return(
            <div className='step1 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Quel est ton nom d'artiste ?</div>
                <input 
                    type='text'
                    placeholder="On te jugera pas même si c’est EA Sports Starsteunegame..." 
                    className='cleanbtn iput radius shadow font s15 c000'
                />
            </div>
        )
    }

    const step2 = () => {
        return(
            <div className='step2 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Tu es ?</div>
                <div className='choose radius shadow flex aic'>
                    <button 
                        className={`cleanbtn btn flex aic anim ${youAre == 'Membre d’un groupe' && 'on'}`} 
                        onClick={() => setYouAre('Membre d’un groupe')}
                    >
                        <div className={`radio rel anim ${youAre == 'Membre d’un groupe' && 'on'}`} />
                        <div className='font b6 c000'>Membre d’un groupe</div>
                    </button> 
                    <button 
                       className={`cleanbtn btn flex aic anim ${youAre == 'Un artiste solo' && 'on'}`} 
                        onClick={() => setYouAre('Un artiste solo')}
                    >
                        <div className={`radio rel anim ${youAre == 'Un artiste solo' && 'on'}`} />
                        <div className='font b6 c000'>Un artiste solo</div> 
                    </button> 
                </div>
            </div>
        )
    }

    const step3 = () => {
        return(
            <div className='step3 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Il y a combien de membre dans ton groupe ?</div>
                <div className='item flex aic'>
                    <div className='flex flex-col aic'>
                        <button 
                            className='cleanbtn ico icon-chevron-up s16 cfff' 
                            onClick={() => setMembers(memebers => memebers + 1)}
                        />
                        <input 
                            type='text' 
                            placeholder="0"
                            className='cleanbtn shadow counter font s15 b5 c000' 
                            value={memebers}
                            onChange={(e) => setMembers(e.target.value)}
                        />
                        <button 
                            disabled={memebers == 0}
                            className='cleanbtn ico icon-chevron-down s16 cfff'
                            onClick={() => setMembers(memebers => memebers - 1)}
                        />
                    </div>
                    <div className='lbl font s15 cfff'>personnes</div>
                </div>
                <div className='msg font s14 b3 cfff'>Si t’es pas tout seul dans ta tête, désolé, on a pas mis cette option</div>
            </div>
        )
    }

    const step4 = () => {
        return(
            <div className='step1 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Quel est le nom de ton groupe ?</div>
                <input 
                    type='text'
                    placeholder="svdhwsujqhdjqsjsksk c’est pas mal #validéparHatik" 
                    className='cleanbtn iput radius shadow font s15 c000'
                />
            </div>
        )
    }

    const step5 = () => {
        return(
            <div className='step5 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Enchantés Zobla ! On a hâte de découvrir ton univers 😁 <br/> Pour commencer, on aimerait connaître ton genre musical</div>
                <div className='blk flex aic'>
                    {
                        _musicalGenre.map((item, index) => (
                        <button 
                            key={index}
                            className={`cleanbtn btn flex aic anim ${musicalGenre == 'Membre d’un groupe' && 'on'}`} 
                            onClick={() => setMusicalGenre(item.label)}
                        >
                            <div className={`radio rel anim ${musicalGenre == item.label && 'on'}`} />
                            <div className='font s15 b6 c000'>{item.label}</div>
                        </button> 
                        ))
                    }
                </div>
            </div>
        )
    }

    const step6 = () => {
        return(
            <div className='step1 flex flex-col'>
                <div className='label s22 b7 cfff'>Un style en particulier ?</div>
                <input 
                    type='text'
                    placeholder="Drill, new soul...." 
                    className='cleanbtn iput radius shadow font s15 c000'
                />
            </div>
        )
    }

    const step7 = () => {
        return(
            <div className='step7 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Quel type de projet musical comptes-tu réaliser ?</div>
                <div className='blk flex aic'>
                    {
                        _musicalProject.map((item, index) => (
                            <button  
                                key={index}
                                className={`cleanbtn item anim ${musicalProject == item.label && 'on'}`}
                                onClick={() => setMusicalProject(item.label)}
                            >
                                <div className='flex aic img rel' style={{backgroundImage: `url(${item.img})`}}>
                                    <div className='cvr abs fill' />
                                    <div className='txt font s15 b5 cfff'>{item.label}</div>
                                </div>
                            </button>
                        ))
                    }
                </div>
            </div>
        )
    }

    const step8 = () => {
        return(
            <div className='step3 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Wow ! Et ton [type de projet] fera combien de titre ?</div>
                <div className='item flex aic'>
                    <div className='flex flex-col aic'>
                        <button 
                            className='cleanbtn ico icon-chevron-up s16 cfff' 
                            onClick={() => setNumberOfTitle(numberOfTitle => numberOfTitle + 1)}
                        />
                        <input 
                            type='text' 
                            placeholder="0"
                            className='cleanbtn shadow counter font s15 b5 c000' 
                            value={numberOfTitle}
                            onChange={(e) => setMembers(e.target.value)}
                        />
                        <button 
                            disabled={numberOfTitle == 0}
                            className='cleanbtn ico icon-chevron-down s16 cfff'
                            onClick={() => setNumberOfTitle(numberOfTitle => numberOfTitle - 1)}
                        />
                    </div>
                    <div className='lbl font s15 cfff'>titres</div>
                </div>
            </div>
        )
    }

    const step9 = () => {
        return(
            <div className='step2 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Feras-tu des featurings ?</div>
                <div className='choose radius shadow flex aic'>
                    <button 
                        className={`cleanbtn btn flex aic anim ${featuring == 'Oui' && 'on'}`} 
                        onClick={() => setFeaturing('Oui')}
                    >
                        <div className={`radio rel anim ${featuring == 'Oui' && 'on'}`} />
                        <div className='font s15 b6 c000'>Oui</div>
                    </button> 
                    <button 
                       className={`cleanbtn btn flex aic anim ${featuring == 'Non' && 'on'}`} 
                        onClick={() => setFeaturing('Non')}
                    >
                        <div className={`radio rel anim ${featuring == 'Non' && 'on'}`} />
                        <div className='font s15 b6 c000'>Non</div> 
                    </button> 
                </div>
            </div>
        )
    }

    const step10 = () => {
        return(
            <div className='step2 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Ferez-vous des featurings ?</div>
                <div className='choose radius shadow flex aic'>
                    <button 
                        className={`cleanbtn btn flex aic anim ${featuring == 'Oui' && 'on'}`} 
                        onClick={() => setFeaturing('Oui')}
                    >
                        <div className={`radio rel anim ${featuring == 'Oui' && 'on'}`} />
                        <div className='font s15 b6 c000'>Oui</div>
                    </button> 
                    <button 
                       className={`cleanbtn btn flex aic anim ${featuring == 'Non' && 'on'}`} 
                        onClick={() => setFeaturing('Non')}
                    >
                        <div className={`radio rel anim ${featuring == 'Non' && 'on'}`} />
                        <div className='font s15 b6 c000'>Non</div> 
                    </button> 
                </div>
            </div>
        )
    }

    const step11 = () => {
        return(
            <div className='step3 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Trop bien ! Et il y en aura combien ?</div>
                <div className='item flex aic'>
                    <div className='flex flex-col aic'>
                        <button 
                            className='cleanbtn ico icon-chevron-up s16 cfff' 
                            onClick={() => setMembers(memebers => memebers + 1)}
                        />
                        <input 
                            type='text' 
                            placeholder="0"
                            className='cleanbtn shadow counter font s15 b5 c000' 
                            value={memebers}
                            onChange={(e) => setMembers(e.target.value)}
                        />
                        <button 
                            disabled={memebers == 0}
                            className='cleanbtn ico icon-chevron-down s16 cfff'
                            onClick={() => setMembers(memebers => memebers - 1)}
                        />
                    </div>
                    <div className='lbl font s15 cfff'>Featurings</div>
                </div>
                <div className='msg font s14 b3 cfff'>Ne te fais pas manger hein c’est ton titre ne l’oublie pas</div>
            </div>
        )
    }

    const step12 = () => {
        return(
            <div className='step12 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Et tu en es où dans ton projet ?</div>
                <div className='blk flex flex-col'>
                    {
                        _yourProjects.map((item, index) => (
                            <button 
                                className={`cleanbtn btn flex aic anim ${yourProject == item.label && 'on'}`} 
                                onClick={() => setYourProject(item.label)}
                            >
                                <div className={`radio rel anim ${yourProject == item.label && 'on'}`} />
                                <div className='lbl font s15 b6 c000'>{item.label}</div>
                            </button> 
                        ))
                    } 
                </div>
            </div>
        )
    }

    const step13 = () => {
        return(
            <div className='step7 step13 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Qu’est ce qu’il te manque ?</div>
                <div className='blk flex aic'>
                    {
                        _missing.map((item, index) => (
                            <button  
                                key={index}
                                className={`cleanbtn item anim ${missing == item.label && 'on'}`}
                                onClick={() => setMissing(item.label)}
                            >
                                <div className='flex aic img rel' style={{backgroundImage: `url(${item.img})`}}>
                                    <div className='cvr abs fill' />
                                    <div className='txt font s15 b5 cfff'>{item.label}</div>
                                </div>
                            </button>
                        ))
                    }
                </div>
                <input 
                    className='cleanbtn iput font s15 c000'
                    placeholder='Dis nous en plus...'
                /> 
            </div>
        )
    }

    const step14 = () => {
        return(
            <div className='step3 step14 flex flex-col'>
                <div className='label s22 b7 cfff'>Quand souhaites-tu que ton [type de projet] sorte ?</div>
                    <div className='blk flex aic'>
                        <div className='item flex aic'>
                            <div className='flex flex-col aic'>
                                <button className='cleanbtn ico icon-chevron-up s20 cfff'/>
                                <input 
                                    type='text' 
                                    placeholder='December'
                                    className='cleanbtn shadow counter font s15 b5 c000'
                                />
                                <button className='cleanbtn ico icon-chevron-down s20 cfff'/>
                            </div>
                        </div>
                        <div className='item flex aic'>
                            <div className='flex flex-col aic'>
                                <button className='cleanbtn ico icon-chevron-up s20 cfff'/>
                                <input 
                                    type='text' 
                                    placeholder='2021'
                                    className='cleanbtn shadow counter font s15 b5 c000' 
                                />
                                <button className='cleanbtn ico icon-chevron-down s20 cfff'/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

    const step15 = () => {
        return(
            <div className='step3 step14 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Quand prévois-tu de démarrer ton [type de projet]  ?</div>
                    <div className='blk flex aic'>
                        <div className='item flex aic'>
                            <div className='flex flex-col aic'>
                                <button className='cleanbtn ico icon-chevron-up s20 cfff'/>
                                <input 
                                    type='text' 
                                    placeholder='Juillet'
                                    className='cleanbtn shadow counter font s15 b5 c000'
                                />
                                <button className='cleanbtn ico icon-chevron-down s20 cfff'/>
                            </div>
                        </div>
                        <div className='item flex aic'>
                            <div className='flex flex-col aic'>
                                <button className='cleanbtn ico icon-chevron-up s20 cfff'/>
                                <input 
                                    type='text' 
                                    placeholder='2021'
                                    className='cleanbtn shadow counter font s15 b5 c000' 
                                />
                                <button className='cleanbtn ico icon-chevron-down s20 cfff'/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

    const step16 = () => {
        return(
            <div className='step2 flex flex-col aic'>
                <div className='label s22 b7 cfff'>As-tu déjà enregistré en studio  avant ce projet ?</div>
                <div className='choose radius shadow flex aic'>
                    <button 
                        className={`cleanbtn btn flex aic anim ${featuring == 'Oui' && 'on'}`} 
                        onClick={() => setFeaturing('Oui')}
                    >
                        <div className={`radio rel anim ${featuring == 'Oui' && 'on'}`} />
                        <div className='font s15 b6 c000'>Oui</div>
                    </button> 
                    <button 
                       className={`cleanbtn btn flex aic anim ${featuring == 'Non' && 'on'}`} 
                        onClick={() => setFeaturing('Non')}
                    >
                        <div className={`radio rel anim ${featuring == 'Non' && 'on'}`} />
                        <div className='font s15 b6 c000'>Non</div> 
                    </button> 
                </div>
            </div>
        )
    }

    const step17 = () => {
        return(
            <div className='step3 step14 step17 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Combien de temps prends-tu pour enregistrer un titre  ?</div>
                <div className='blk flex aic'>
                        <div className='item flex aic'>
                            <div className='flex flex-col aic'>
                                <button className='cleanbtn ico icon-chevron-up s20 cfff'/>
                                <input 
                                    type='text' 
                                    placeholder='0'
                                    className='cleanbtn shadow counter font s15 b5 c000'
                                />
                                <button className='cleanbtn ico icon-chevron-down s20 cfff'/>
                            </div>
                            <div className='lbl font s15 b5 cfff'>Heures</div>
                        </div>
                        <div className='item flex aic'>
                            <div className='flex flex-col aic'>
                                <button className='cleanbtn ico icon-chevron-up s20 cfff'/>
                                <input 
                                    type='text' 
                                    placeholder='00'
                                    className='cleanbtn shadow counter font s15 b5 c000' 
                                />
                                <button className='cleanbtn ico icon-chevron-down s20 cfff'/>
                            </div>
                            <div className='lbl font s15 b5 cfff'>Minutes</div>
                        </div>
                    </div>
                <button 
                    className={`cleanbtn btn flex aic anim ${featuring == 'Oui' && 'on'}`} 
                    onClick={() => setFeaturing('Oui')}
                >
                    <div className={`radio rel anim ${featuring == 'Oui' && 'on'}`} />
                    <div className='font s15 b6 c000'>Je ne sais pas du tout</div>
                </button> 
                <div className='msg font s15 cfff'>Pas besoin de faire du Eminem pour faire un excellent titre, t’inquiètes pas</div>
            </div>
        )
    }

    const step18 = () => {
        return(
            <div className='step2 step18 flex flex-col aic'>
                <div className='hdr flex rel'>
                    <div className='label s22 b7 cfff'>Un mixage à distance est-il envisagable pour toi ?</div>
                    <div className='info-icon s16 icon-info cfff rel'><div className='info font s14 c000 abs anim'>Le mixage arrive après l’enregistrement d’un projet. Cette étape indispensable permet d'homogénéiser des sonorités de votre morceau, afin que votre morceau sonne bien et que vous obteniez un résultat optimal.</div></div>
                </div>
                <div className='choose radius shadow flex aic'>
                    <button 
                        className={`cleanbtn btn flex aic anim ${featuring == 'Oui pas de problème' && 'on'}`} 
                        onClick={() => setFeaturing('Oui pas de problème')}
                    >
                        <div className={`radio rel anim ${featuring == 'Oui pas de problème' && 'on'}`} />
                        <div className='font s15 b6 c000'>Oui pas de problème</div>
                    </button> 
                    <button 
                       className={`cleanbtn btn flex aic anim ${featuring == 'Non je préfère être présent' && 'on'}`} 
                        onClick={() => setFeaturing('Non je préfère être présent')}
                    >
                        <div className={`radio rel anim ${featuring == 'Non je préfère être présent' && 'on'}`} />
                        <div className='font s15 b6 c000'>Non je préfère être présent</div> 
                    </button> 
                </div>
            </div>
        )
    }

    const step19 = () => {
        return(
            <div className='step7 step13 step19 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Ou prends-tu tes instrumentales ?</div>
                <div className='blk flex aic'>
                    {
                        _yourInstrumental.map((item, index) => (
                            <button  
                                key={index}
                                className={`cleanbtn item anim ${instrument == item.label && 'on'}`}
                                onClick={() => setInstrument(item.label)}
                            >
                                <div className='flex aic img rel' style={{backgroundImage: `url(${item.img})`}}>
                                    <div className='cvr abs fill' />
                                    <div className='txt font s15 b5 cfff'>{item.label}</div>
                                </div>
                            </button>
                        ))
                    }
                </div>
                <div className='msg font s14 b5 c000'>« Assures toi d'avoir les droits de ton instrumentale si tu veux la distribuer sur les plateformes par la suite »</div>
                <button 
                    className={`cleanbtn btn flex aic anim ${instrumentValid ? 'on' : ''}`} 
                    onClick={() => setInstrumentValid(!instrumentValid)}
                >
                    <div className={`radio rel anim ${instrumentValid ? 'on' : ''}`} />
                    <div className='font s15 b5 cfff'>J’ai compris</div>
                </button> 
            </div>
        )
    }

    const step20 = () => {
        return(
            <div className='step12 step20 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Quel type de promotion préfères-tu pour ton [type de projet]  ?</div>
                <div className='msg font s15 b3 cfff'>Fais ta sélection par ordre de préférence</div>
                <div className='blk flex flex-col'>
                    {/* No. 1 */}
                    <button className="btn cleanbtn cstm-slt flex aic rel" onClick={(e)=>{
                        e.stopPropagation();
                        setDropfirstOption(!dropfirstOption); 
                        setDropSecondOption(false) 
                        setDropThirdOption(false)
                    }}> 
                        {!firstOption && <div className="iput flex aic"><div className="txt font s15 b5 c000">N°1</div></div>}
                        { 
                            _firstOptions.map(item=>(
                                firstOption == item.label  && <div className="iput flex aic"><div className="txt font s15 b5 c000">{item.label}</div></div>
                            ))
                        }  
                        {dropfirstOption && <div className="options flex flex-col abs">
                            {
                                _firstOptions.map(item=>(
                                    <button className="cleanbtn item flex aic anim" onClick={()=>{
                                        setDropfirstOption(!dropfirstOption); 
                                        setFirstOption(item.label);
                                    }}>        
                                        <div className="txt font s15 b5 c000">{item.label}</div> 
                                    </button> 
                                ))
                            }
                            </div> 
                        }
                    </button>

                    {/* No. 2 */}
                    <button className="btn cleanbtn cstm-slt flex aic rel" onClick={(e)=>{
                        e.stopPropagation()
                        setDropfirstOption(false)
                        setDropThirdOption(false)
                        setDropSecondOption(!dropSecondOption)  
                    }}> 
                        {!secondOption && <div className="iput flex aic"><div className="txt font s15 b5 c000">N°2</div></div>}
                        { 
                            _secondOptions.map(item=>(
                                secondOption == item.label  && <div className="iput flex aic"><div className="txt font s15 b5 c000">{item.label}</div></div>
                            ))
                        }  
                        {dropSecondOption && <div className="options flex flex-col abs">
                            {
                                _secondOptions.map(item=>(
                                    <button className="cleanbtn item flex aic anim" onClick={()=>{
                                        setSecondOtpion(item.label);
                                        setDropSecondOption(false); 
                                    }}>        
                                        <div className="txt font s15 b5 c000">{item.label}</div> 
                                    </button> 
                                ))
                            }
                            </div> 
                        }
                    </button>

                    {/* No. 3 */}
                    <button className="btn cleanbtn cstm-slt flex aic rel" onClick={(e)=>{
                        e.stopPropagation();
                        setDropfirstOption(false)
                        setDropSecondOption(false)
                        setDropThirdOption(!dropThirdOption)  
                    }}> 
                        {!thirdOption && <div className="iput flex aic"><div className="txt font s15 b5 c000">N°3</div></div>}
                        { 
                            _thirdOptions.map(item=>(
                                thirdOption == item.label  && <div className="iput flex aic"><div className="txt font s15 b5 c000">{item.label}</div></div>
                            ))
                        }  
                        {dropThirdOption && <div className="options flex flex-col abs">
                            {
                                _thirdOptions.map(item=>(
                                    <button className="cleanbtn item flex aic anim" onClick={()=>{
                                        setDropThirdOption(!dropThirdOption); 
                                        setThirdOption(item.label);
                                    }}>        
                                        <div className="txt font s15 b5 c000">{item.label}</div> 
                                    </button> 
                                ))
                            }
                            </div> 
                        }
                    </button>
                </div>
            </div>
        )
    }

    const step21 = () => {
        return(
            <div className='step2 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Es-tu intéressé par l’idée de participer à des concours, tremplins... ?</div>
                <div className='choose radius shadow flex aic'>
                    <button 
                        className={`cleanbtn btn flex aic anim ${featuring == 'Oui' && 'on'}`} 
                        onClick={() => setFeaturing('Oui')}
                    >
                        <div className={`radio rel anim ${featuring == 'Oui' && 'on'}`} />
                        <div className='font s15 b6 c000'>Oui</div>
                    </button> 
                    <button 
                       className={`cleanbtn btn flex aic anim ${featuring == 'Non' && 'on'}`} 
                        onClick={() => setFeaturing('Non')}
                    >
                        <div className={`radio rel anim ${featuring == 'Non' && 'on'}`} />
                        <div className='font s15 b6 c000'>Non</div> 
                    </button> 
                </div>
            </div>
        )
    }

    const step22 = () => {
        return(
            <div className='step1 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Quels sont tes artistes de références ?</div>
                <textarea 
                    row={2}
                    col={2} 
                    type='text'
                    placeholder="Si tu sais plus fais comme avec Siri : “Dis Siri c’est qui l’artiste qui chante undaaaaaia wilovenforyouuuuua”" 
                    className='cleanbtn iput area radius shadow font s15 c000'
                />
            </div>
        )
    }

    const step23 = () => {
        return(
            <div className='step1 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Présentes nous ton projet un peu plus en détail ?</div>
                <textarea 
                    row={2}
                    col={2} 
                    type='text'
                    placeholder="Nom du Projet, message véhiculé, pourquoi souhaites-tu réaliser cet [Type de Projet], tu fais ce projet pour le fun ou tu aimerais faire carrière ?" 
                    className='cleanbtn iput area radius shadow font s15 c000'
                />
            </div>
        )
    }

    const step24 = () => {
        return(
            <div className='step2 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Quel est ton nom et prénom ?</div>
                <div className='choose radius shadow flex aic'>
                    <input
                        type='text'
                        placeholder="Nom" 
                        className='cleanbtn btn font s15 c000 flex aic anim' 
                    />
                    <input
                        type='text'
                        placeholder="Prénom" 
                        className='cleanbtn btn font s15 c000 flex aic anim' 
                    />
                </div>
            </div>
        )
    }

    const step25 = () => {
        return(
            <div className='step25 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Dans quelle ville es-tu ?</div>
                <div className='blk'>
                    <div className='feild flex aic'>
                        <button className='cleanbtn'><img src="/images/gps.svg" className='ico'/></button>
                        <input
                            type='text'
                            className='cleanbtn iput font s15 c000'
                            placeholder="Dans quelle ville es-tu ?" 
                        />
                    </div>
                    <div className='msg font s15 b3 cfff'>Rentre ton code postal ou géolocalise toi directement en cliquant sur le petit icone juste au dessus</div>
                </div>
            </div>
        )
    }

    const step26 = () => {
        return(
            <div className='step25 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Dans quelle ville es-tu ?</div>
                <div className='blk'>
                    <div className='feild flex aic'>
                        <input
                            type='text'
                            className='cleanbtn iput font s15 c000'
                            placeholder="Dans quelle ville es-tu ?" 
                        />
                        <button className='cleanbtn btn font s15 cfff'>Vérifier</button>
                    </div>
                    <div className='msg font s15 b3 cfff'>Tu vas recevoir un code de vérification comme pour ton compte uber eat</div>
                </div>
            </div>
        )
    }

    const step27 = () => {
        return(
            <div className='step1 step27 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Peux tu nous communiquer ton adresse mail ?</div>
                <input 
                    type='text'
                    placeholder="easportsstarsteunegame@gmail.com" 
                    className='cleanbtn iput radius shadow font s15 c000'
                />
            </div>
        )
    }

    const step28 = () => {
        return(
            <div className='step12 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Quelles sont tes disponibilités pour ton projet musical ?</div>
                <div className='blk flex flex-col'>
                    {
                       _availabilities.map((item, index) => (
                            <button 
                                className={`cleanbtn btn flex aic anim ${yourProject == item.label && 'on'}`} 
                                onClick={() => setYourProject(item.label)}
                            >
                                <div className={`radio rel anim ${yourProject == item.label && 'on'}`} />
                                <div className='lbl font s15 b6 c000'>{item.label}</div>
                            </button> 
                        ))
                    } 
                </div>
            </div>
        )
    }

    const step29 = () => {
        return(
            <div className='step3 step14 step17 step29 flex flex-col aic'>
                <div className='label s22 b7 cfff'>Quand tu dis [disponibilité], ça représente combien d’heures par jour ?</div>
                <div className='blk flex aic'>
                        <div className='item flex aic'>
                            <div className='flex flex-col aic'>
                                <button className='cleanbtn ico icon-chevron-up s20 cfff'/>
                                <input 
                                    type='text' 
                                    placeholder='0'
                                    className='cleanbtn shadow counter font s15 b5 c000'
                                />
                                <button className='cleanbtn ico icon-chevron-down s20 cfff'/>
                            </div>
                            <div className='lbl font s15 b5 cfff'>Heures</div>
                        </div>
                        <div className='item flex aic'>
                            <div className='flex flex-col aic'>
                                <button className='cleanbtn ico icon-chevron-up s20 cfff'/>
                                <input 
                                    type='text' 
                                    placeholder='00'
                                    className='cleanbtn shadow counter font s15 b5 c000' 
                                />
                                <button className='cleanbtn ico icon-chevron-down s20 cfff'/>
                            </div>
                            <div className='lbl font s15 b5 cfff'>Minutes</div>
                        </div>
                    </div>
                <div className='msg font s15 cfff'>Netflix ne t’en voudras pas si tu nous accordes un peu de son temps</div>
            </div>
        )
    }

    return (
        <div className='quizz-p'>
            <div className='wrapper flex flex-col aic'>
                {_questions()}

                {/* Next & Prev Button */}
                <div className='ftr flex aic'> 
                    <button 
                        className='cleanbtn btn flex aic anim' 
                        disabled={step == 1}
                        onClick={() => setStep(step => step - 1)}
                    >
                        <div className='ico icon-chevron-left s15 cfff'/>
                        <div className="font s16 cfff">Retour</div>
                    </button> 
                    <button 
                        className='cleanbtn btn flex aic anim' 
                        disabled={step == 29}
                        onClick={() => setStep(step => step + 1)}
                    >
                        <div className="font s16 cfff">Suivant</div>
                        <div className='ico icon-chevron-right s15 cfff'/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Quizz;