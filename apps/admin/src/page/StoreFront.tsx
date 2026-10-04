// example for future reference

export default function StoreFront() {
  return (
    <body className="bg-background-light text-text-main min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
              <header className="flex items-center justify-between whitespace-nowrap border-b-2 border-dashed border-primary/30 px-4 md:px-10 py-3 mb-6">
                <div className="flex items-center gap-4">
                  <div className="size-8 text-primary flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                  <h2 className="text-text-main text-2xl font-bold leading-tight tracking-[-0.015em] font-display">
                    Sonho de Feltro
                  </h2>
                </div>
                <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                  <label className="hidden md:flex flex-col min-w-40 h-12 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-3xl h-full border-2 border-dashed border-secondary/50 bg-white">
                      <div
                        className="text-secondary flex items-center justify-center pl-4"
                        data-icon="search"
                        data-size="24px"
                        data-weight="regular"
                      >
                        <span className="material-symbols-outlined">
                          search
                        </span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-3xl text-text-main focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-text-muted px-4 pl-2 text-base font-medium font-body leading-normal"
                        placeholder="Buscar amiguinhos..."
                        value=""
                      />
                    </div>
                  </label>
                  <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-3xl h-12 w-12 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    <div
                      data-icon="shopping_cart"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <span className="material-symbols-outlined text-2xl">
                        shopping_cart
                      </span>
                    </div>
                  </button>
                </div>
              </header>
              <main className="flex-1 flex flex-col gap-10 pb-10">
                <div className="@container">
                  <div className="flex flex-col gap-6 px-4 py-8 md:py-12 bg-white rounded-3xl border-2 border-dashed border-primary/30 shadow-plush @[864px]:flex-row @[864px]:items-center">
                    <div className="w-full @[864px]:w-1/2 flex justify-center">
                      <div
                        className="w-full max-w-[400px] aspect-square bg-center bg-no-repeat bg-cover rounded-3xl border-4 border-white shadow-plush"
                        data-alt="A highly detailed, cute plush starfish character waving hello in a cozy, well-lit artisan studio setting. The lighting is warm and inviting, casting soft shadows that highlight the fuzzy texture of the felt fabric. The overarching UI style is kawaii and artisan, employing a soft coral and seafoam mint color palette on a warm wool cream background. The mood is friendly, tactile, and distinctly handmade."
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZjPSwjfqwM4BdJDCpc8u6IMRJVCVOu-hyrOIG2eJzZHaz-wo4WafqkBMOHiLX48CfIH_sAqWoW2NyRKoG2yB-k2muSZkcTMlF1kl_RYTNHOQeJbPFRvMvcPimhAmkQ7tWRMHTE8q_PM08Mm6iSo5s1eTMRsrnCOM_ozwFLseQza_ytUIe7WjreD4PNzKeHMsz7MiB_06txdGHyZRKMFdfIAIfJ8M6eN0hEo5bOrlyOCebgocUhxJ2B-V_68gfkw6dgUk9y_29JfgW')",
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col gap-6 @[864px]:w-1/2 text-center @[864px]:text-left px-4 md:px-8">
                      <div className="flex flex-col gap-4">
                        <h1 className="text-text-main text-4xl font-bold leading-tight tracking-tight font-display @[480px]:text-5xl">
                          Bem-vindo à Estrela Anã!
                        </h1>
                        <p className="text-text-muted text-base font-medium font-body leading-relaxed @[480px]:text-lg">
                          Descubra pelúcias feitas à mão com muito amor, carinho
                          e um toque de magia feltro. Cada amiguinho é único e
                          espera por um abraço seu.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center @[864px]:justify-start">
                        <button className="flex cursor-pointer items-center justify-center rounded-3xl h-12 px-8 bg-primary text-white text-base font-bold font-display leading-normal hover:opacity-90 shadow-plush transition-opacity">
                          <span className="truncate">Ver Coleção</span>
                        </button>
                        <button className="flex cursor-pointer items-center justify-center rounded-3xl h-12 px-8 bg-secondary/10 text-secondary border-2 border-dashed border-secondary text-base font-bold font-display leading-normal hover:bg-secondary/20 transition-colors">
                          <span className="truncate">Sobre Nós</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <section className="flex flex-col gap-6 px-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-text-main text-2xl font-bold font-display leading-tight">
                      Categorias Fofas
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-3xl border-2 border-dotted border-secondary/40 hover:shadow-plush transition-shadow cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <span
                          className="material-symbols-outlined text-3xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          water_drop
                        </span>
                      </div>
                      <span className="font-display font-medium text-text-main">
                        Fundo do Mar
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-3xl border-2 border-dotted border-primary/40 hover:shadow-plush transition-shadow cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <span
                          className="material-symbols-outlined text-3xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          forest
                        </span>
                      </div>
                      <span className="font-display font-medium text-text-main">
                        Floresta
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-3xl border-2 border-dotted border-blue-300/40 hover:shadow-plush transition-shadow cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-400">
                        <span
                          className="material-symbols-outlined text-3xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          cloud
                        </span>
                      </div>
                      <span className="font-display font-medium text-text-main">
                        Céu
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-3xl border-2 border-dotted border-purple-300/40 hover:shadow-plush transition-shadow cursor-pointer">
                      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-400">
                        <span
                          className="material-symbols-outlined text-3xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          auto_awesome
                        </span>
                      </div>
                      <span className="font-display font-medium text-text-main">
                        Mágicos
                      </span>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col gap-6 px-4">
                  <h2 className="text-text-main text-2xl font-bold font-display leading-tight">
                    Novos Amiguinhos
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col gap-3 bg-white p-3 rounded-3xl border-2 border-dashed border-primary/20 shadow-plush group">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-2xl overflow-hidden relative"
                        data-alt="A highly detailed image of a cute handmade felt plush mint-green octopus sitting on a soft white fabric surface. The lighting is bright and cheerful, enhancing the kawaii aesthetic and the artisan crafted texture of the felt. The visual style uses a cohesive palette of soft coral and seafoam mint against a warm wool cream background, conveying a tactile, cozy mood."
                        style={{
                          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBm3pbucXkJy7uGa78XCqJhnhZtyzaSl4gN1ftlGMrcJVXSdxzcfkZBR9a2ilT9oLAvnnp0FeikaImYL8_cWuf-LSuVA50pXJEgPOk3oyPRCIIddXo6VftltNGOvOFQNn7MPbkaKoTA7r7UCcbPyT2vheSEMPL15KHzgWve4OFN_7cfP9ptnKlp5r9nZWgmk2YEN8cx6Uz-2C_24mnNegsXnrLHqXCmpUxbLgCo4zotRWu6YArLYHsE1f2lYdYzDEHHl-fO_8iI2pqZ')`,
                        }}
                      >
                        <div className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <span
                            className="material-symbols-outlined text-xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            favorite
                          </span>
                        </div>
                      </div>
                      <div className="px-2 pb-2">
                        <p className="text-text-main text-lg font-bold font-display leading-normal">
                          Polvo Menta
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-primary text-base font-bold leading-normal">
                            R$ 45,00
                          </p>
                          <button className="bg-secondary/20 p-1.5 rounded-full text-secondary hover:bg-secondary hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-sm">
                              add_shopping_cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-white p-3 rounded-3xl border-2 border-dashed border-primary/20 shadow-plush group">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-2xl overflow-hidden relative"
                        data-alt="A highly detailed image of a lovely handmade felt plush coral-colored whale resting on a textured wooden table. The lighting is warm and natural, bringing out the soft, tactile qualities of the artisan felt work. The overarching UI style relies on a kawaii aesthetic with seafoam mint and soft coral accents over a warm wool cream background. The mood is sweet and charming."
                        style={{
                          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA59vsoxlrcM3NqJZ89Ujoxo6nQOFySN6R5q4VIEAk2hmMSjx7S1_5nFn2MadnSpopuPULCLEEZNGdmSSUtovfu0vnimXtC6wWvDcWaMg616tchusPFvv_ZbDnRy9b1yMnJi34x1czd1lg5mnDBCDTAo_nHLbBJVObZEN1FCFaUv8G8LNoB7egkJJjaOmZ-EHcRbCLVe6zaSU6dTWGQFv5D0YoSUnr7_LSQQpjKe5uWb1JEPgw7XNhpuHjFSy9dIcgUZB2SjvwgYPDY')`,
                        }}
                      >
                        <div className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <span className="material-symbols-outlined text-xl">
                            favorite
                          </span>
                        </div>
                      </div>
                      <div className="px-2 pb-2">
                        <p className="text-text-main text-lg font-bold font-display leading-normal">
                          Baleia Coral
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-primary text-base font-bold leading-normal">
                            R$ 55,00
                          </p>
                          <button className="bg-secondary/20 p-1.5 rounded-full text-secondary hover:bg-secondary hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-sm">
                              add_shopping_cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-white p-3 rounded-3xl border-2 border-dashed border-primary/20 shadow-plush group">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-2xl overflow-hidden relative"
                        data-alt="A highly detailed image of a plump, handmade felt plush frog sitting on a crocheted blanket. The lighting is soft and diffused, emphasizing the fuzzy texture and handmade artisan quality. The color palette features kawaii tones of soft coral, seafoam mint, and warm wool cream, perfectly aligning with a cozy, tactile brand aesthetic."
                        style={{
                          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmVrpd5HTNVcDa6ge5wE3kzZ9RAZPf0_Wd-k5p0jRSH-jcEGgi8iNQsDlDbP8P5fFncmHsPoGiBqjbv6vvVr6hIhCZME6JrwcZZMYXWbfTXAeu1rTUwOHkcBWiLYXSirl4_LYKSj8GbZQIwMGMwex7YOIzPU2M0qorwk6se9VxgtfAZjV1PLYLaciJgRsYCAZ--Jy6rNc78vJ19q9fgO7mhzCawcmXcNJcyZBiEx7uBVp9TP5Cc6jaz8v-0OPalnyvqr9O31m3NpWR')`,
                        }}
                      >
                        <div className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <span className="material-symbols-outlined text-xl">
                            favorite
                          </span>
                        </div>
                      </div>
                      <div className="px-2 pb-2">
                        <p className="text-text-main text-lg font-bold font-display leading-normal">
                          Sapo Fofinho
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-primary text-base font-bold leading-normal">
                            R$ 40,00
                          </p>
                          <button className="bg-secondary/20 p-1.5 rounded-full text-secondary hover:bg-secondary hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-sm">
                              add_shopping_cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 bg-white p-3 rounded-3xl border-2 border-dashed border-primary/20 shadow-plush group">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-2xl overflow-hidden relative"
                        data-alt="A highly detailed image of a cute handmade felt plush kitten made of light-colored wool playing with a tiny yarn ball. The setting is bright and cozy with soft, warm lighting that highlights the artisan stitching details. The scene perfectly captures a kawaii aesthetic using soft coral and seafoam mint accents against a warm wool cream background."
                        style={{
                          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJsZcxwW4ufIye7Ba6CL-WBYFd-q6nuCPyKJtkZyUfok62JyIC_mStSRWvz19wXG3eh3QhtddLHV9n9BtESGkzA8JU29_aB0gs3p6wEncJhI3li9By3K-V_livezly8K-MzIcJ8nNy2MZL4q_ZzN5jq_XDHiCCmcOxbx8cWT07tZU3VCUycMNhqwBYT5pITtcbTRsiM4M6NxazIhOideqy_ew0TZWib_QYMmwGtPHQZsgD4s1iTcBx4TUmVrSXngRpTie4sqsCECl4')`,
                        }}
                      >
                        <div className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <span className="material-symbols-outlined text-xl">
                            favorite
                          </span>
                        </div>
                      </div>
                      <div className="px-2 pb-2">
                        <p className="text-text-main text-lg font-bold font-display leading-normal">
                          Gatinho de Lã
                        </p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-primary text-base font-bold leading-normal">
                            R$ 50,00
                          </p>
                          <button className="bg-secondary/20 p-1.5 rounded-full text-secondary hover:bg-secondary hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-sm">
                              add_shopping_cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

// <!DOCTYPE html>

// <html dir="ltr" lang="pt-BR"><head>
// <meta charset="utf-8"/>
// <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
// <title>Sonho de Feltro - Handmade Plushies</title>
// <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
// <link href="https://fonts.googleapis.com" rel="preconnect"/>
// <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
// <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&amp;family=Quicksand:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
// <script id="tailwind-config">
//     tailwind.config = {
//       darkMode: "class",
//       theme: {
//         extend: {
//           colors: {
//             "primary": "#FF9E9D", // Soft coral
//             "secondary": "#98D8C8", // Seafoam mint
//             "background-light": "#FFFBF5", // Warm wool cream
//             "background-dark": "#FFFBF5", // Kept light for aesthetic
//             "text-main": "#5D4037", // Soft brown for readability
//             "text-muted": "#8D6E63",
//           },
//           fontFamily: {
//             "display": ["Fredoka", "sans-serif"],
//             "body": ["Quicksand", "sans-serif"],
//           },
//           borderRadius: {
//             "none": "0",
//             "sm": "0.125rem",
//             DEFAULT: "0.25rem",
//             "md": "0.375rem",
//             "lg": "0.5rem",
//             "xl": "0.75rem",
//             "2xl": "1rem",
//             "3xl": "1.5rem", // Emphasized rounded corners
//             "full": "9999px"
//           },
//           boxShadow: {
//             'plush': '0 4px 14px 0 rgba(255, 158, 157, 0.15)',
//           }
//         },
//       },
//     }
//   </script>
// <style>
//     body {
//       font-family: 'Quicksand', sans-serif;
//     }
//     h1, h2, h3, h4, h5, h6, .font-display {
//       font-family: 'Fredoka', sans-serif;
//     }
//     .material-symbols-outlined {
//       font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
//     }
//   </style>
// </head>
