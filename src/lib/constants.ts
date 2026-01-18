// Site constants
export const SITE_NAME = "HairsalonX";
export const SITE_TAGLINE = "Haar zoals je het nog niet kende";
export const SITE_DESCRIPTION = "Specialist in krullen, kleuren & extensions - Roermond";
export const BOOKING_URL = "https://hairsalonx2.boekingapp.nl/";

// Contact Information
export const CONTACT = {
    address: "Sint-Christoffelstraat 12",
    postalCode: "6041 JS",
    city: "Roermond",
    country: "Nederland",
    phone: "06-27020236",
    email: "info@hairsalonx.nl",
    instagram: "@hairsalonx",
};

// Opening Hours
export const OPENING_HOURS = [
    { day: "Maandag", hours: "Gesloten" },
    { day: "Dinsdag", hours: "09:00 - 18:00" },
    { day: "Woensdag", hours: "09:00 - 18:00" },
    { day: "Donderdag", hours: "09:00 - 21:00" },
    { day: "Vrijdag", hours: "09:00 - 18:00" },
    { day: "Zaterdag", hours: "09:00 - 16:00" },
    { day: "Zondag", hours: "Gesloten" },
];

// Navigation Links
export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/diensten", label: "Diensten" },
    { href: "/over-ons", label: "Over Ons" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
];

// Services Categories
export const SERVICES = {
    knippenStyling: {
        title: "Styling & Knippen",
        description: "Precisie en stijl voor elke look, afgestemd op jouw persoonlijkheid.",
        items: [
            { name: "Dames Knippen", description: "Inclusief wassen en stylen", price: "€ 55,00", duration: "60 min" },
            { name: "Heren Knippen", description: "Strakke lijnen en finish", price: "€ 40,00", duration: "45 min" },
            { name: "Föhnen Deluxe", description: "Volume en glans voor een avond uit", price: "€ 35,00", duration: "30 min" },
            { name: "Kinderen Knippen", description: "Tot 12 jaar", price: "€ 25,00", duration: "30 min" },
        ],
    },
    kleuren: {
        title: "Kleuren",
        description: "Diepe tinten en subtiele highlights die je gezicht laten stralen.",
        items: [
            { name: "Balayage", description: "Hand-painted, natuurlijk verloop", price: "€ 120+", duration: "180 min" },
            { name: "Highlights Full Head", description: "Volledige verheldering", price: "€ 95,00", duration: "150 min" },
            { name: "Toner Touch-up", description: "Opfrissen van kleur en glans", price: "€ 45,00", duration: "45 min" },
            { name: "Uitgroei Kleuren", description: "Alleen de aanzet", price: "€ 65,00", duration: "90 min" },
        ],
    },
    specialismen: {
        title: "Specialismen",
        description: "Van revolutionaire krultechnieken tot premium extensions.",
        items: [
            { name: "Curl Sys® Kniptechniek", description: "Voor de perfecte valling en bundeling", price: "€ 75,00", duration: "75 min" },
            { name: "Weave Extensions", description: "Volume en verlenging (Consultatie)", price: "Op aanvraag", duration: "" },
            { name: "Keratine Behandeling", description: "Voor glad, glanzend haar", price: "€ 150,00", duration: "120 min" },
            { name: "Olaplex Treatment", description: "Herstel en versterking", price: "€ 45,00", duration: "30 min" },
        ],
    },
};

// Portfolio Images (placeholder URLs - replace with real images)
export const PORTFOLIO_IMAGES = [
    {
        id: 1,
        title: "Soft Balayage",
        category: "Kleuring",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYMD2ATadjcdPX3gWCbyzwZVrViG3raAMlsZLyZNZdxxOzdj4ki48V3Nca5IGyscFMaxh_BUj5zRPUeT9KF3cEuwf_wzaRRB10Tma_ev0-GEPiFH0dbUQjiYB7f3cbjxFJ2ZYorVslG-sC9796RleiDVH8hJzir52tPztASGOodSipmDEQcKrBvKnfalkO_jBV5GICpWmVzVwVzUdSaRUISzbGfEsoEtcERqWFwYaa3gqKt7a2jBUfX4dzHLagRBwQMxODjk8uyMs",
        tag: "Before & After",
    },
    {
        id: 2,
        title: "Curly Transformation",
        category: "Krullen",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJFRud2suFJIUmWMH4nOIpHOUVeOXIXZUpuzfiEdGe1XH7W_AiDnIY4IWi1GK6jNGtznlz5m1MBt23JisWwtxDILqUKQMgGB2B2rXTaoYeTX7_hFhqN1ZxaQNaN35OF20w8By6g7LQKohrJPBbYZ2wcMUJBV9Osyv7OtUG5zXWMHMATbmGGyspB36HoHW4ZPHVRKKQGjHA2ZIPwRDEXL-JjqhOsn7qFOr-2TqKKeq0STjBy0krMse-e-756rZMn-AVIjrNp6iUP30",
        tag: "Styling",
    },
    {
        id: 3,
        title: "Modern Bridal",
        category: "Bridal",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6UKrGdDSyqP454pThXVOdJhGvBrHrZAtLSu5WTUD02KbUmYAU_5pq5_Ls6Lm22ABgySmaG1DR5ZkQtVv470YHbFcKZpstWgexzfKSYe6pbLbyhyjG0VrJqVdOw2B-xd4aaBtx49BUEUPI5yNz3YeJdF62-YL8Y1cA534UamV1_zYDtIUFV-GEa0PRfaStkR9L-LeWB7KJqlYsZ-285SFh2HDFjordztM7LY6CBRYHtrli4GgyIwNj46qY0FtcREoHSva3Wjytqfo",
        tag: "Special",
    },
    {
        id: 4,
        title: "Copper Glow",
        category: "Kleuring",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKHbInuYm5SNO6-GsKas8OkZgu8-5gm3vMoch6EHMHyiFsCYNflaFQ6IBf-VnesCIawYCteE4mqRpHDCqs3msNIoknJSFFKBzdxdC7RST14tnle374Yn_ff4fIKPGvxoY3j9HMBtlzu4xxLEhpPF176jCdOMxgFlfzcePFSdyBqn8pw7cD3wfjvQJQrDy-AEQlX0R_0bCulZt0MtowUbo2krZGkI6eliHgDBgwEouBtshhnXXP-dRuYpZlvdsBhleYPZXb8hlGg4o",
        tag: "Color",
    },
    {
        id: 5,
        title: "Textured Crop",
        category: "Styling",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMzixFbTzd3dbb89RM_zj_wyzBERxPwcUpcmdr1brNC3OVmljoP1TQfnCvETjRaMnVMGNuxzY6oYd_N_xIRcGKRXUMN_5qN4e1GZaPtzWzmlXUpoCRaq-6je2QvdKRKcxeg7D4KgZ__CqTpeHxNMUEPpiUSXYy_f2BHisvQIDw0xa_pKymUeiUIxsCwkGtHGeo40Lhl2DpM7yvHCKJXBudYkNHoySae0pnibhEIBfYsvifpWxju-hskOmmKmxbs8vQ4K98g95_l9w",
        tag: "",
    },
    {
        id: 6,
        title: "Ice Platinum",
        category: "Kleuring",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2waZS37mO7Sf5nGl1IsTwZ-YkCiZCHOrJ9pGGi0YtUC7IO5lxRVBmBQeJFxWknrIrFYeHQFw_iT5sXh7DRPbGeMu19WBMgqjdKHcKXvxDGwDobbc9QIKLQnkyejFc3dgEqzkuS9Sb-9mEVCikPMCSx6zzo4TBXKZguPqC41LCLTSyG9Y5lC8Z38neX6WSKSyY-4BuD8Kh8ojQW1McOzSymlWcbhBhuIsfZmYsflTm3TGR1-aoacfmzW_JqhrnsZND2fz4oNzLbN8",
        tag: "Correction",
    },
];

// Hero Images
export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAV6obARxfRBcbY4Rt8s5CMEj2ehv749cT-ijEk2H-HtRJimmUuepMoh31oW0laMHjHQIAwQAtztcZnXqrHiMta2Gi-Pb7stGJ1rQRy4FJpZNi2FrYfH9jBrBWdSVNfmsKRZ4AqvoZFSdd2NhW89z956i-1an1HjtU8h5wiVj2j7B2lVcGAv9NqgbPH17uN-B0hSFFR0M3vnXyQzuk9fHdeOKiaC7DWMQMv7sErxr4-9n9A0uEw7RgLR11T1ZFipCwVDkukSEIGc6Q";

// Service Preview Images
export const SERVICE_IMAGES = {
    knippen: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSeymeIy8dsN3_RCWcFDRMUDpr30wF0p7YWiG2FRF9UTjibF6Eyh8pYTQ8exDUpo0iBoAvzBHuOONo57DvXacM3uiFFvfmyNg8LClo09BR393WW52Zez2LC05Opwypf0gwR4wBPK4EzIObo2GwX7B5jk_fIuYcem-PjFSRX_TN2HDfL0IMkmV-wdB_SlNSermSqrdoHNAVYX2Xf08dMxowV0RiW75-mZ0Aswih5l6SqRHDc9eKhluk4zxy_HdCuqLxr53IwdCHnCE",
    kleuren: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJsL8HA7RfTo_Ej_mY_75GkrarvM1yVn1yFQ40yaNFKw3sRg73w4x3g_84IJmbdid3ddUQbDygCV1jDtSNNErBAc1DBnxtFzY26WfRtGKf29kPLKiWIt35Vos1Daw4Nxfzs1TYwh9K2pp-Zzyf_bHrNxUCFKIt7EeVA2f8qC8FfPiNfxBXL2i-HtZM3p9DW2DcMoZsng5kiwM9LWISbFp_Tdqu-pCw2p7m3MXJhwwLsgoBWRmLHWGVJpALOWEI0eWh_oCmrfDKHM8",
    styling: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFpKs99uftyLCp7pRmOSW30wGEz_9pF2QvPln9FKbOQoepBQSJQE1g-SKaTaZYtRNpWx0ad0scjhVvA2hoN-rMw8ftnkBUnRg4K3kAMj1iyXM4DaXTSjXqG1Co0SRMoIsSF6YiDy56KJmqK8DSgCfXRwq8re0fCIRIi38Q7ULBwgYLBex7Zo9ygaQtS3q7l1t_RcIU1hncJiKFPMxcGXxgzSbISo7-xEJ32VQ8Cc64KJo011TR32iWJr7mYH1KQxHiqiXZwkVdA6c",
};

// Transformation Images for Homepage
export const TRANSFORMATION_IMAGES = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBgXj379LhxO7ndN1II6CFrbUPvQrPxXWqrzK4SZ3wNi6jq8AZn35n5wZGmNiBp3sNVDD2DJ42bTDhvw1FK-tektVXq9-5421xgkOowuOIPOPw5fR4mVcOJMWcqY5Zlt912W3EQ8NB9In3fodOyAPzhUcZxAs_GjC-IwMC_k5Y5w3EwokVn-hTbTbVULbtz_GqG1c7NUvRABwIxUyJnJCHorPJJrCMLwW7cTVUuJ_fXtgvCNmzkG1iejmssIEwE5iULHQcMS9HwE8Y",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDUGOaTrL8lj2LBsYY8JmD-sb1ASE1FOLHrcYPN0pny9xiwyt31QqvAl79VSr2WRDKdR_lQ6JYs_21AgkGknwEZQ4Db2ycdFkEpUTMj-wKVnhvEp2eZpbue3_7-L106qEyJ_N4X131l3_6i3kYyrY8esxAV-SBsnrdfP1rz_Jc0Yd08NQ_1KyifN6EF1xFn7lvuDoYfFLjn2kDJWAbaZNX03_c3oqc8d4tImba1O3TlIY-WHdTuAulJfuCetoe4r9abK7M1ig5Vaik",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Axf-IP2zvdOQ-tphOBLFDV34GjJjaUlSiqvNHxulIyUHmC0byS1yBIGq5BFa99nOsLFWdHOTqHHh7QWucBaRHrYE-vFo_9iT-BXO9liZhLisdBZnZ5EmuYUUH85jkAVnB1q-Rc1BO6izA1knWP5lME9wbM1m7NXRbuZ3wGMRihgL8sCJ4IhkFmPMlODkFLc6JPWM6owr2eQAfrVEbU4c73PF-RNB-rh6p4PErj8S2UNeGk630i-YYLR03jfJ8N48AANo7SEXs8M",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBE0gqwN7lQr5nvdrmw1NBX6JctG1lvLR4eUPIKTFraYUlv8N6yVeqQEmJOwfFjjIsuoKfa2bdC7GyiJvEGSJPIZSmYWuisdFM1KAzBRK6aTmwyCPJoWwZTuOLbyvxg1NL7GQ0U2GdGcSuzgxk4pnIye-gL1FgzbN5oYn_nkkquP-lBHJOGULdRx2APDYc3G9BP90N93FXOzaKaZZr3n5IFBTliZ0mQXEkRFrwOmoCtTcZHBr1u9iI3T00XHmoP8kEFhebc0fLWRN4",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDU3Nb8V8h6GWjLnve4LpolY7xIiiwFjg8b9BlABl-r_3uwuBoNphLnH6cn46R22MT0b14U5wwrJEim7bY-SqFf4abU5WXJ3Tin-tpZyT5Gv_B0OpMb_DsvrLDd27LKFawJfb_7yL3BjbuUdt0-2-o-fjeIEL7jzDLvtXUM-nps87TbwSsMSpGPRwRhI45F-QYb7BFr5WMEwfpwWedO_9PcPvveaEEovx87doCFdUbXMOW5fOc9qz6C7_WbdQD0FBFHlVWUMwgW0-Q",
];

// About Page Founder Image
export const FOUNDER_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCmtwm9-0ENk2WNZpLlfOLc-rD5lWpjxJr_klzBoOWcvtkiyC1EK29p7T52OHTPxCFb3c4lZtuiFiAzW3fDgp63AvAFdNd8hrM-KYq1ldE8NoS2a_ry1Op7nQnz1Z-fI7bN3JQ6iEZ-2cXpsC7AAykMeG_p9Rs77ONkFFH2z4xknShh2-dR6t9Ozc6LQSyhJ_WJtcTOALBd2XvdvvnvDCBPlVAwE9QjYGeKNyCJmSaFBnKs0fpVa1GXVCvL4jQOItnqkuXkScmMJ4";
