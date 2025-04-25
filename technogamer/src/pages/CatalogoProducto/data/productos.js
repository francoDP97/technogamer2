const productos = [
  {
    id: 1,
    name: "Teclado Mecanico Logitech PRO X TKL Wireless Lightspeed 1ms White RGB Switch GX 50Hs",
    price: 29400.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39742_Teclado_Mecanico_Logitech_PRO_X_TKL_Wireless_Lightspeed_1ms_White_RGB_Switch_GX_50Hs_e564c8a6-grn.jpg",
    category: "Teclado",
    subcategory: "Logitech", // nuevo
    description: "Teclado mecánico retroiluminado, switches Outemu Blue.",
    stock: 10
  },
  {
    id: 2,
    name: "Teclado Mecanico Logitech PRO X 60 Wireless Lightspeed 2.4Ghz Bluetooth Black Switch GX RGB 65Hs",
    price: 12900.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39638_Teclado_Mecanico_Logitech_PRO_X_60_Wireless_Lightspeed_2.4Ghz_Bluetooth_Black_Switch_GX_RGB_65Hs_c5716463-grn.jpg",
    category: "Teclado",
    subcategory: "Logitech", // nuevo
    description: "Teclado mecánico retroiluminado, switches Outemu Blue.",
    stock: 10
  },
  {
    id: 3,
    name: "Teclado Mecanico Logitech G915X Wireless tri-mode Low Profile Lightspeed TKL Switch Tactil Black",
    price: 20900.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_42700_Teclado_Mecanico_Logitech_G915X_Wireless_tri-mode_Low_Profile_Lightspeed_TKL_Switch_Tactil_Black_4a5f50dd-grn.jpg",
    category: "Teclado",
    subcategory: "Logitech", // nuevo
    description: "Teclado mecánico retroiluminado, switches Outemu Blue.",
    stock: 10
  },
  {
    id: 4,
    name: "Teclado Mecanico Redragon K686 Eisa PRO Wireless 2.4GHz Bluetooth RGB Switch Red Linear White/Blue",
    price: 7999.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43138_Teclado_Mecanico_Redragon_K686_Eisa_PRO_Wireless_2.4GHz_Bluetooth_RGB_Switch_Red_Linear_White_Blue_6c900b83-grn.jpg",
    category: "Teclado",
    subcategory: "Redragon",
    description: "Webcam Full HD 1080p con micrófono estéreo.",
    stock: 11
  },
  {
    id: 5,
    name: "Teclado Mecanico Redragon K686 Eisa PRO SE Wireless 2.4Ghz Bluetooth RGB Switch Red Linear",
    price: 87400.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43022_Teclado_Mecanico_Redragon_K686_Eisa_PRO_SE_Wireless_2.4Ghz_Bluetooth_RGB_Switch_Red_Linear__268ac322-grn.jpg",
    category: "Teclado",
    subcategory: "Redragon",
    description: "Sonido envolvente 7.1, diseño ligero para largas sesiones.",
    stock: 10
  },
  {
    id: 6,
    name: "Teclado Mecanico Redragon K648 Olaf Swtich Red Lineal RGB USB-C 90%",
    price: 83150.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43025_Teclado_Mecanico_Redragon_K648_Olaf_Swtich_Red_Lineal_RGB_USB-C_90__79eea7b6-grn.jpg",
    category: "Teclado",
    subcategory: "Redragon",
    description: "Micrófono USB multipatrón para streaming y grabación.",
    stock: 10
  },
  {
    id: 7,
    name: "Teclado Hypermagnetico SteelSeries Apex PRO TKL Wireless 2.4Ghz Bluetooth OLED Smart Display Switch Omnipoint 3.0 Hall Effect RGB 38hs",
    price: 300600.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45706_Teclado_Hypermagnetico_SteelSeries_Apex_PRO_TKL_Wireless_2.4Ghz_Bluetooth_OLED_Smart_Display_Switch_Omnipoint_3.0_Hall_Effect_RGB_38hs_686cbc35-grn.jpg",
    category: "Teclado",
    subcategory: "SteelSeries",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 10
  },
  {
    id: 8,
    name: "Teclado Hipermagnético Steel Series Apex PRO 3 Black RGB Omnipoint 3.0 Hall Effects",
    price: 288350.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45634_Teclado_Hipermagn__tico_Steel_Series_Apex_PRO_3_Black_RGB_Omnipoint_3.0_Hall_Effect_26ebc6a3-grn.jpg",
    category: "Teclado",
    subcategory: "SteelSeries",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 10
  },
  {
    id: 9,
    name: "Auriculares SteelSeries Arctis Nova PRO Dualconnect Wireless 2.4Ghz Bluetooth Infinity Power System 44Hs Hot-swap PC/PS/MAC/Switch ",
    price: 569100.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45867_Auriculares_SteelSeries_Arctis_Nova_PRO_Dualconnect_Wireless_2.4Ghz_Bluetooth_Infinity_Power_System_44Hs_Hot-swap_PC_PS_MAC_Switch_be11f788-grn.jpg",
    category: "Auriculares",
    subcategory: "SteelSeries",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 10
  },
  {
    id: 10,
    name: "Auriculares SteelSeries Arctis Nova PRO Dualconnect Wireless 2.4Ghz Bluetooth White Infinity Power System 44Hs Hot-swap PC/PS/XBOX/MAC/Switch ",
    price: 569200.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45849_Auriculares_SteelSeries_Arctis_Nova_PRO_Dualconnect_Wireless_2.4Ghz_Bluetooth_White_Infinity_Power_System_44Hs_Hot-swap_PC_PS_XBOX_MAC_Switch_834df267-grn.jpg",
    category: "Auriculares",
    subcategory: "SteelSeries",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 10
  },
  {
    id: 11,
    name: "Auriculares Logitech H111 Single Jack",
    price: 16000.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_1172_Auriculares_Logitech_H111_Single_Jack_add9a544-grn.jpg",
    category: "Auriculares",
    subcategory: "SteelSeries",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 10
  }
  ,
  {
    id: 12,
    name: "Auriculares Razer Kraken V4 X RGB USB-C PC/PS5/XBOX",
    price: 133250.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43302_Auriculares_Razer_Kraken_V4_X_RGB_USB-C_PC_PS5_XBOX_4b81c02f-grn.jpg",
    category: "Auriculares",
    subcategory: "Razer",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 3
  }
  ,
  {
    id: 13,
    name: "Auriculares Razer Barracuda X Chroma Wireless 2.4Ghz Bluetooth Dual-Connect RGB PC/PS5/XBOX 70hs ",
    price: 213200.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_44676_Auriculares_Razer_Barracuda_X_Chroma_Wireless_2.4Ghz_Bluetooth_Dual-Connect_RGB_PC_PS5_XBOX_70hs_875f5573-grn.jpg",
    category: "Auriculares",
    subcategory: "Razer",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 3
  }

  ,
  {
    id: 14,
    name: "Auriculares Razer BLACKSHARK V2 HyperSpeed Wireless 2.4Ghz Bluetooth 5.2 Ultra Light 70Hs White USB-C",
    price: 231300.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_42503_Auriculares_Razer_BLACKSHARK_V2_HyperSpeed_Wireless_2.4Ghz_Bluetooth_5.2_Ultra_Light_70Hs_White_USB-C_c2c720a7-grn.jpg",
    category: "Auriculares",
    subcategory: "Razer",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 3
  },
  {
    id: 15,
    name: "Auriculares Logitech Astro A50X Wireless Lightspeed 2.4Ghz Bluetooth Black PC/PS5/XBOX HDMI 2.1 24HS",
    price: 624650.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_40581_Auriculares_Logitech_Astro_A50X_Wireless_Lightspeed_2.4Ghz_Bluetooth_Black_PC_PS5_XBOX_HDMI_2.1_24HS_b529753e-grn.jpg",
    category: "Auriculares",
    subcategory: "Logitech",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 3
  },
  {
    id: 16,
    name: "Fuente Gigabyte AORUS Elite P1000W 80 Plus Platinum GP-AE1000PM PG5 ICE ATX 3.0 PCIe 5.0 Full Modular",
    price: 293650.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45420_Fuente_Gigabyte_AORUS_Elite_P1000W_80_Plus_Platinum_GP-AE1000PM_PG5_ICE_ATX_3.0_PCIe_5.0_Full_Modular_e1902ccd-grn.jpg",
    category: "Fuente",
    subcategory: "Gigabyte",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 3
  },
  {
    id: 17,
    name: "Fuente Be Quiet 1200W 80 Plus Platinum STRAIGHT POWER 12 Full Modular ATX 3.1 PCIe 5.1",
    price: 377750.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_44308_Fuente_Be_Quiet_1200W_80_Plus_Platinum_STRAIGHT_POWER_12_Full_Modular_ATX_3.1_PCIe_5.1_69b2dc04-grn.jpg",
    category: "Fuente",
    subcategory: "Be Quiet!",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 3
  },
  {
    id: 18,
    name: "Fuente Cooler Master 1250W 80 Plus Gold Full Modular GX3 12VHPWR ATX 3.0",
    price: 377750.00,
    image: "https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45089_Fuente_Cooler_Master_1250W_80_Plus_Gold_Full_Modular_GX3_12VHPWR_ATX_3.0_51bfcfbc-grn.jpg",
    category: "Fuente",
    subcategory: "Cooler Master",
    description: "6 núcleos, 12 hilos, excelente rendimiento en juegos.",
    stock: 76
  }


];


export default productos;
