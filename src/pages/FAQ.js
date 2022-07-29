import React, { useState } from 'react'
import Navbar from '../components/General/Navbar/Navbar'
import useDocumentTitle from "../Hooks/useDocumentTitle"
import Footer from "../components/General/Footer/Footer"
import Accordion from '../components/General/Accordion/Accordion'

const faqData = [
    {
        id: 1,
        title: "What data is processed by the vehicle?",
        answer: "If your vehicle has a wireless internet connection, you are enabled to share data between your vehicle and other systems (the data servers of AUDI AG or the data servers of service providers). In certain countries, the wireless internet connection is enabled by an on-board transmitting and receiving unit (permanently installed by the AUDI AG) or via a mobile device provided by you (e.g. a smartphone). This wireless internet connection enables the use of online features (information and control services for your vehicle). These include online services and applications/apps that are provided by the AUDI AG or other providers (the “Audi connect services” or the “services”)."
    },
    {
        id: 2,
        title: "How long is your data stored?",
        answer: "The AUDI AG will store your data for as long as is necessary to provide the services to you or for as long as the AUDI AG has a legitimate interest in continued storage, for reasons of troubleshooting or for purposes of service optimisation. The AUDI AG only stores the data that the AUDI AG requires for the respective purpose and pseudonymises or anonymises the data that is processed beyond the provision of services as far as possible. In addition, the AUDI AG is subject to various storage and documentation obligations, including those arising from the German Commercial Code (HGB) and the German Fiscal Code (AO). The retention and documentation periods specified therein are up to 10 years. Ultimately, the storage period is also governed by statute of limitations periods, which can be up to 30 years, for example, pursuant to Sections 195 ff. of the German Civil Code (Bürgerliches Gesetzbuch – “BGB”), whereby the general limitations period is 3 years. Under certain circumstances, your data may also need to be stored longer, e.g. if a legal hold or litigation hold is ordered in connection with official or court proceedings (i.e. a prohibition against deleting the data for the duration of the proceedings)."
    },
    {
        id: 3,
        title: "Who receives your data?",
        answer: "Within the AUDI AG, only the parts of the organisation that require your data to fulfil our contractual and legal obligations and to protect the legitimate interests of the AUDI AG are given access to your data. Service providers (data processors) employed and appointed by the AUDI AG may also receive data for these purposes. If the AUDI AG uses data processors to provide these services, the AUDI AG ensures that personal data is protected in accordance with the relevant statutory provisions by means of suitable legal precautions and appropriate technical and organisational measures. As a matter of principle, the AUDI AG will only disclose your personal data to third parties if required to fulfil the contract, if the AUDI AG or the third party has a legitimate interest in such disclosure or if you have given your consent. In addition, data may be transferred to third parties (including investigative or security authorities) if the AUDI AG is obliged to do so by law or by enforceable official or court order."
    },
    {
        id: 4,
        title: "Deactivation of online services",
        answer: "Depending on your vehicle configurations, you can disable the collection of certain personal data using your vehicle’s privacy settings. When you disable the collection of such data, the services that use this data can no longer be provided. This does not include functions and services required by law, such as an emergency call system. More information can be found in the privacy menu of your vehicle."
    },
    {
        id: 5,
        title: "myAudi navigation",
        answer: "myAudi Navigation provides you with personalised navigation services. To use the service, you must register and open a separate myAudi account. Using your myAudi account, you can configure the services in your myAudi account and send certain data and content for the functions of your Audi connect services to your vehicle (via your mobile network connection) and also allow certain vehicle and user data to be sent between  compatible vehicles, mobile devices and the service provider. In order to use the personalised services provided by myAudi Navigation, the data must be allocated to your pseudonym over multiple driving cycles. For this purpose, your myAudi username and your vehicles are each assigned a unique pseudonym (user ID and vehicle ID). The service provider only receives these pseudonyms. The data is synchronised using your pseudonymous user ID and your pseudonymous vehicle ID(s). The service provider does not receive your name or your vehicle identification number (VIN). After you delete the data in one of your MMI systems or your myAudi app, it is deleted from our service provider’s IT systems after the next successful synchronisation of all your devices. The service provider for this is: HERE Global B.V., Kennedyplein 222-226, 5611 ZT Eindhoven, the Netherlands. If your vehicle supports the “e-tron route planner”, additional information about energy consumption, vehicle climate data and the vehicle’s climate control settings as well as the charging data is sent in order to provide route suggestions in your vehicle, taking into account the available charging stations and the electric range of your vehicle. Destinations created when privacy settings are enabled (\"Recent destinations\" and \"Favourites\") are assigned to your profile and synchronised with your myAudi account again after the privacy settings are disabled. If you want to prevent the subsequent synchronisation of certain destinations, you must manually delete these destinations before disabling the privacy settings."
    },
    {
        id: 6,
        title: "Online navigation",
        answer: "The \"Online navigation\" service provides you with routes calculated online, taking account of current traffic conditions. The service required the current position of your vehicle, the desired destination and settings such as route criteria and traffic information settings. The data is sent in accordance with the principle of data minimisation. Under this principle, all queries from your vehicle are anonymised. The review of the usage authorisation is conducted anonymously. During each driving cycle, the data is sent with a different pseudonym (session ID) to the service provider. The service provider does not receive your name or your vehicle identification number (VIN). The data sent to the service provider is only used to provide, optimise and enhance the service. In addition to the above detailed service-specific data, the metadata required to provide the service is also sent: time stamp, information about the software versions used, the map or map tile versions used. The service is provided by the following service provider: HERE Global B.V., Kennedyplein 222 -226, 5611 ZT Eindhoven, the Netherlands."
    },
    {
        id: 7,
        title: "Personal Points of Interest (POI)",
        answer: "Using an SD card, the user can load his/her own points of interest to the vehicle. This data is displayed on the map and can be used for navigation. The data is stored locally in the vehicle. The data is only sent to the AUDI AG when another service is used."
    },
    {
        id: 8,
        title: "General information about mandatory emergency calls",
        answer: "In the event of an emergency the emergency call system (eCall) can be triggered manually or automatically. Your vehicle then sends a legally stipulated minimum dataset and establishes a voice call connection to an emergency call centre. The dataset includes the following data: the vehicle identification number (VIN) (which makes it possible to clearly identify the vehicle and identify its owner), vehicle type (car or light commercial vehicle), type of vehicle drive (petrol/diesel/CNG/LPG/electric/hydrogen), current position of the vehicle (location data place and time), last three locations of the vehicle and its direction of travel, number of occupants, time stamp, trigger type (manual, automatic). The data is generated when the trigger is activated and is stored locally for the duration of the emergency call and up to one hour after the emergency call. When the emergency call is triggered, your vehicle sends the data directly to the relevant emergency service centres, which are designated by the relevant authorities of the country where they are located in, to be the first to accept and process eCalls to the standard European emergency number 112. The processing of the data is based on a legal obligation to provide the emergency call functionality (Art. 6(1)(c) of the GDPR). The service is activated by default and cannot be deactivated. Your vehicle cannot be tracked during standby mode of this service. Further details about data processing of the mandatory emergency call system can be found in your vehicle manual."
    },
    {
        id: 9,
        title: "Privacy settings in the vehicle",
        answer: "All settings for using your vehicle can be found on the Audi homepage (www.audi.com). You are required to register a myAudi account for access. As soon as you have created your vehicle with your VIN in myAudi, you can view the owner’s manual. Verification as the key user is not required."
    },
    {
        id: 10,
        title: "General information about data processing",
        answer: "The AUDI AG provides you with information about data processing in the privacy policies in the vehicle, which you will find on the MMI of your vehicle and elsewhere. The privacy policies also provide information about the underlying legal basis for data processing. Your consent is only required for individual data processing. If data processing is based on consent, the AUDI AG only processes your personal data if you have given your consent. For further information, please refer to the applicable privacy policy, where you can find detailed information about the relevant services."
    }
]

const FAQ = () => {
    useDocumentTitle("FAQ")
    const [active, setActive] = useState("")
    return (
        <>
            <Navbar activated="faq" />
                <div className='container'>
                    {faqData.map(item => <Accordion key={item.id} {...item} active={active} setActive={setActive} />)}
                </div>
            <Footer />
        </>
    )
}

export default FAQ