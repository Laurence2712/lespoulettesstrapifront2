// ============================================================
// DONNÉES STATIQUES — PRODUITS (RÉALISATIONS)
// ============================================================

export interface ImageData {
  id: number;
  url: string;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
}

export interface Declinaison {
  id: number;
  Stock: number;
  Description?: string;
  CoupDeCoeur?: boolean;
  Image: ImageData;
}

export interface Realisation {
  id: string;
  title: string;
  image_url?: string;
  description?: string;
  prix?: number;
  isNew?: boolean;
  totalStock?: number | null;
  categorie?: string;
  dimensions?: string;
  mainImages: ImageData[];
  declinaisons: Declinaison[];
}

export const realisations: Realisation[] = [
  {
    id: 'j62oyt82hk8l70peg621xdsd',
    title: 'CHOUCHOUS',
    image_url: '/images/products/chouchous-main.jpg',
    description: "Confectionnés à la main au Bénin, ces chouchous wax sont l'accessoire parfait pour apporter une touche africaine et colorée à toutes tes coiffures. Chaque motif est unique, choisis celui qui te ressemble !",
    prix: 2,
    isNew: false,
    categorie: 'Accessoires',
    mainImages: [
      {
        id: 1,
        url: '/images/products/chouchous-main.jpg',
        formats: {
          large: { url: '/images/products/chouchous-main.jpg' },
          thumbnail: { url: '/images/products/chouchous-main.jpg' },
        },
      },
    ],
    declinaisons: [
      { id: 101, Stock: 2, Description: 'Modèle 1', CoupDeCoeur: true, Image: { id: 101, url: '/images/products/chouchous-1-large.jpg', formats: { large: { url: '/images/products/chouchous-1-large.jpg' }, thumbnail: { url: '/images/products/chouchous-1.jpg' } } } },
      { id: 102, Stock: 2, Description: 'Modèle 2', CoupDeCoeur: false, Image: { id: 102, url: '/images/products/chouchous-2-large.jpg', formats: { large: { url: '/images/products/chouchous-2-large.jpg' }, thumbnail: { url: '/images/products/chouchous-2.jpg' } } } },
      { id: 103, Stock: 2, Description: 'Modèle 3', CoupDeCoeur: false, Image: { id: 103, url: '/images/products/chouchous-3-large.jpg', formats: { large: { url: '/images/products/chouchous-3-large.jpg' }, thumbnail: { url: '/images/products/chouchous-3.jpg' } } } },
      { id: 104, Stock: 2, Description: 'Modèle 4', CoupDeCoeur: false, Image: { id: 104, url: '/images/products/chouchous-4-large.jpg', formats: { large: { url: '/images/products/chouchous-4-large.jpg' }, thumbnail: { url: '/images/products/chouchous-4.jpg' } } } },
      { id: 105, Stock: 2, Description: 'Modèle 5', CoupDeCoeur: false, Image: { id: 105, url: '/images/products/chouchous-5-large.jpg', formats: { large: { url: '/images/products/chouchous-5-large.jpg' }, thumbnail: { url: '/images/products/chouchous-5.jpg' } } } },
      { id: 106, Stock: 2, Description: 'Modèle 6', CoupDeCoeur: false, Image: { id: 106, url: '/images/products/chouchous-6-large.jpg', formats: { large: { url: '/images/products/chouchous-6-large.jpg' }, thumbnail: { url: '/images/products/chouchous-6.jpg' } } } },
      { id: 107, Stock: 2, Description: 'Modèle 7', CoupDeCoeur: false, Image: { id: 107, url: '/images/products/chouchous-7-large.jpg', formats: { large: { url: '/images/products/chouchous-7-large.jpg' }, thumbnail: { url: '/images/products/chouchous-7.jpg' } } } },
      { id: 108, Stock: 2, Description: 'Modèle 8', CoupDeCoeur: false, Image: { id: 108, url: '/images/products/chouchous-8-large.jpg', formats: { large: { url: '/images/products/chouchous-8-large.jpg' }, thumbnail: { url: '/images/products/chouchous-8.jpg' } } } },
      { id: 109, Stock: 2, Description: 'Modèle 9', CoupDeCoeur: false, Image: { id: 109, url: '/images/products/chouchous-9-large.jpg', formats: { large: { url: '/images/products/chouchous-9-large.jpg' }, thumbnail: { url: '/images/products/chouchous-9.jpg' } } } },
      { id: 110, Stock: 2, Description: 'Modèle 10', CoupDeCoeur: false, Image: { id: 110, url: '/images/products/chouchous-10-large.jpg', formats: { large: { url: '/images/products/chouchous-10-large.jpg' }, thumbnail: { url: '/images/products/chouchous-10.jpg' } } } },
      { id: 111, Stock: 2, Description: 'Modèle 11', CoupDeCoeur: false, Image: { id: 111, url: '/images/products/chouchous-11-large.jpg', formats: { large: { url: '/images/products/chouchous-11-large.jpg' }, thumbnail: { url: '/images/products/chouchous-11.jpg' } } } },
      { id: 112, Stock: 2, Description: 'Modèle 12', CoupDeCoeur: false, Image: { id: 112, url: '/images/products/chouchous-12-large.jpg', formats: { large: { url: '/images/products/chouchous-12-large.jpg' }, thumbnail: { url: '/images/products/chouchous-12.jpg' } } } },
      { id: 113, Stock: 2, Description: 'Modèle 13', CoupDeCoeur: false, Image: { id: 113, url: '/images/products/chouchous-13-large.jpg', formats: { large: { url: '/images/products/chouchous-13-large.jpg' }, thumbnail: { url: '/images/products/chouchous-13.jpg' } } } },
    ],
    get totalStock() {
      return this.declinaisons.reduce((sum, d) => sum + d.Stock, 0);
    },
  },

  {
    id: 'wip8jxm0nuj2c82efhmabqs4',
    title: 'TROUSSES ZIPPÉES',
    image_url: '/images/products/trousses-main.jpg',
    description: "Cousue à la main au Bénin dans un tissu wax africain vibrant, cette trousse zippée est aussi pratique qu'originale. Assez grande pour l'essentiel, assez belle qu'on la remarque.",
    prix: 3,
    isNew: false,
    categorie: 'Trousses',
    mainImages: [
      {
        id: 2,
        url: '/images/products/trousses-main.jpg',
        formats: {
          large: { url: '/images/products/trousses-main.jpg' },
          thumbnail: { url: '/images/products/trousses-main.jpg' },
        },
      },
    ],
    declinaisons: [
      { id: 201, Stock: 2, Description: 'Modèle 1', CoupDeCoeur: true, Image: { id: 201, url: '/images/products/trousses-1-large.jpg', formats: { large: { url: '/images/products/trousses-1-large.jpg' }, thumbnail: { url: '/images/products/trousses-1.jpg' } } } },
      { id: 202, Stock: 2, Description: 'Modèle 2', CoupDeCoeur: false, Image: { id: 202, url: '/images/products/trousses-2-large.jpg', formats: { large: { url: '/images/products/trousses-2-large.jpg' }, thumbnail: { url: '/images/products/trousses-2.jpg' } } } },
      { id: 203, Stock: 2, Description: 'Modèle 3', CoupDeCoeur: false, Image: { id: 203, url: '/images/products/trousses-3-large.jpg', formats: { large: { url: '/images/products/trousses-3-large.jpg' }, thumbnail: { url: '/images/products/trousses-3.jpg' } } } },
      { id: 204, Stock: 2, Description: 'Modèle 4', CoupDeCoeur: false, Image: { id: 204, url: '/images/products/trousses-4-large.jpg', formats: { large: { url: '/images/products/trousses-4-large.jpg' }, thumbnail: { url: '/images/products/trousses-4.jpg' } } } },
      { id: 205, Stock: 2, Description: 'Modèle 5', CoupDeCoeur: false, Image: { id: 205, url: '/images/products/trousses-5-large.jpg', formats: { large: { url: '/images/products/trousses-5-large.jpg' }, thumbnail: { url: '/images/products/trousses-5.jpg' } } } },
      { id: 206, Stock: 2, Description: 'Modèle 6', CoupDeCoeur: false, Image: { id: 206, url: '/images/products/trousses-6-large.jpg', formats: { large: { url: '/images/products/trousses-6-large.jpg' }, thumbnail: { url: '/images/products/trousses-6.jpg' } } } },
      { id: 207, Stock: 2, Description: 'Modèle 7', CoupDeCoeur: false, Image: { id: 207, url: '/images/products/trousses-7-large.jpg', formats: { large: { url: '/images/products/trousses-7-large.jpg' }, thumbnail: { url: '/images/products/trousses-7.jpg' } } } },
      { id: 208, Stock: 2, Description: 'Modèle 8', CoupDeCoeur: false, Image: { id: 208, url: '/images/products/trousses-8-large.jpg', formats: { large: { url: '/images/products/trousses-8-large.jpg' }, thumbnail: { url: '/images/products/trousses-8.jpg' } } } },
      { id: 209, Stock: 2, Description: 'Modèle 9', CoupDeCoeur: false, Image: { id: 209, url: '/images/products/trousses-9-large.jpg', formats: { large: { url: '/images/products/trousses-9-large.jpg' }, thumbnail: { url: '/images/products/trousses-9.jpg' } } } },
      { id: 210, Stock: 2, Description: 'Modèle 10', CoupDeCoeur: false, Image: { id: 210, url: '/images/products/trousses-10-large.jpg', formats: { large: { url: '/images/products/trousses-10-large.jpg' }, thumbnail: { url: '/images/products/trousses-10.jpg' } } } },
      { id: 211, Stock: 2, Description: 'Modèle 11', CoupDeCoeur: false, Image: { id: 211, url: '/images/products/trousses-11-large.jpg', formats: { large: { url: '/images/products/trousses-11-large.jpg' }, thumbnail: { url: '/images/products/trousses-11.jpg' } } } },
      { id: 212, Stock: 2, Description: 'Modèle 12', CoupDeCoeur: false, Image: { id: 212, url: '/images/products/trousses-12-large.jpg', formats: { large: { url: '/images/products/trousses-12-large.jpg' }, thumbnail: { url: '/images/products/trousses-12.jpg' } } } },
      { id: 213, Stock: 2, Description: 'Modèle 13', CoupDeCoeur: false, Image: { id: 213, url: '/images/products/trousses-13-large.jpg', formats: { large: { url: '/images/products/trousses-13-large.jpg' }, thumbnail: { url: '/images/products/trousses-13.jpg' } } } },
      { id: 214, Stock: 2, Description: 'Modèle 14', CoupDeCoeur: false, Image: { id: 214, url: '/images/products/trousses-14-large.jpg', formats: { large: { url: '/images/products/trousses-14-large.jpg' }, thumbnail: { url: '/images/products/trousses-14.jpg' } } } },
      { id: 215, Stock: 2, Description: 'Modèle 15', CoupDeCoeur: false, Image: { id: 215, url: '/images/products/trousses-15-large.jpg', formats: { large: { url: '/images/products/trousses-15-large.jpg' }, thumbnail: { url: '/images/products/trousses-15.jpg' } } } },
      { id: 216, Stock: 2, Description: 'Modèle 16', CoupDeCoeur: false, Image: { id: 216, url: '/images/products/trousses-16-large.jpg', formats: { large: { url: '/images/products/trousses-16-large.jpg' }, thumbnail: { url: '/images/products/trousses-16.jpg' } } } },
      { id: 217, Stock: 2, Description: 'Modèle 17', CoupDeCoeur: false, Image: { id: 217, url: '/images/products/trousses-17-large.jpg', formats: { large: { url: '/images/products/trousses-17-large.jpg' }, thumbnail: { url: '/images/products/trousses-17.jpg' } } } },
      { id: 218, Stock: 2, Description: 'Modèle 18', CoupDeCoeur: false, Image: { id: 218, url: '/images/products/trousses-18-large.jpg', formats: { large: { url: '/images/products/trousses-18-large.jpg' }, thumbnail: { url: '/images/products/trousses-18.jpg' } } } },
    ],
    get totalStock() {
      return this.declinaisons.reduce((sum, d) => sum + d.Stock, 0);
    },
  },

  {
    id: 'ahlxpp51s533fohzn6pcitpy',
    title: 'PORTE-CLÉS',
    image_url: '/images/products/porte-cles-main.jpg',
    description: 'Cousu à la main au Bénin dans un tissu wax africain, celui-ci est unique, coloré et plein de caractère. Disponible en plusieurs motifs.',
    prix: 3,
    isNew: false,
    categorie: 'Accessoires',
    mainImages: [
      {
        id: 3,
        url: '/images/products/porte-cles-main.jpg',
        formats: {
          large: { url: '/images/products/porte-cles-main.jpg' },
          thumbnail: { url: '/images/products/porte-cles-main.jpg' },
        },
      },
    ],
    declinaisons: [
      { id: 301, Stock: 1, Description: 'Modèle 1', CoupDeCoeur: true, Image: { id: 301, url: '/images/products/porte-cles-1-large.jpg', formats: { large: { url: '/images/products/porte-cles-1-large.jpg' }, thumbnail: { url: '/images/products/porte-cles-1.jpg' } } } },
      { id: 302, Stock: 1, Description: 'Modèle 2', CoupDeCoeur: false, Image: { id: 302, url: '/images/products/porte-cles-2-large.jpg', formats: { large: { url: '/images/products/porte-cles-2-large.jpg' }, thumbnail: { url: '/images/products/porte-cles-2.jpg' } } } },
      { id: 303, Stock: 1, Description: 'Modèle 3', CoupDeCoeur: false, Image: { id: 303, url: '/images/products/porte-cles-3-large.jpg', formats: { large: { url: '/images/products/porte-cles-3-large.jpg' }, thumbnail: { url: '/images/products/porte-cles-3.jpg' } } } },
    ],
    get totalStock() {
      return this.declinaisons.reduce((sum, d) => sum + d.Stock, 0);
    },
  },

  {
    id: 'qzimqugf13die1v1zkvgk21s',
    title: 'PLUMIERS',
    image_url: '/images/products/plumiers-main.jpg',
    description: "Celui-ci est cousu à la main au Bénin dans un tissu wax africain — coloré, solide et 100 % original. Parfait pour l'école, le bureau ou le sac à main. Disponible en plusieurs motifs.",
    prix: 4,
    isNew: false,
    categorie: 'Accessoires',
    mainImages: [
      {
        id: 4,
        url: '/images/products/plumiers-main.jpg',
        formats: {
          large: { url: '/images/products/plumiers-main.jpg' },
          thumbnail: { url: '/images/products/plumiers-main.jpg' },
        },
      },
    ],
    declinaisons: [
      { id: 401, Stock: 0, Description: 'Modèle 1', CoupDeCoeur: false, Image: { id: 401, url: '/images/products/plumiers-main.jpg', formats: { thumbnail: { url: '/images/products/plumiers-main.jpg' } } } },
    ],
    get totalStock() {
      return this.declinaisons.reduce((sum, d) => sum + d.Stock, 0);
    },
  },

  {
    id: 'r2hgzw502mn3v9dpjx17nned',
    title: 'PORTES MONNAIES',
    image_url: '/images/products/portes-monnaies-main.jpg',
    description: 'Porte-monnaie wax cousu à la main au Bénin dans un tissu africain coloré et résistant. Compact, zippé et disponible en plusieurs motifs.',
    prix: 5,
    isNew: false,
    categorie: 'Accessoires',
    mainImages: [
      {
        id: 5,
        url: '/images/products/portes-monnaies-main.jpg',
        formats: {
          large: { url: '/images/products/portes-monnaies-main.jpg' },
          thumbnail: { url: '/images/products/portes-monnaies-main.jpg' },
        },
      },
    ],
    declinaisons: [
      { id: 501, Stock: 2, Description: 'Modèle 1', CoupDeCoeur: false, Image: { id: 501, url: '/images/products/portes-monnaies-1-large.jpg', formats: { large: { url: '/images/products/portes-monnaies-1-large.jpg' }, thumbnail: { url: '/images/products/portes-monnaies-1.jpg' } } } },
      { id: 502, Stock: 2, Description: 'Modèle 2', CoupDeCoeur: true, Image: { id: 502, url: '/images/products/portes-monnaies-2-large.jpg', formats: { large: { url: '/images/products/portes-monnaies-2-large.jpg' }, thumbnail: { url: '/images/products/portes-monnaies-2.jpg' } } } },
      { id: 503, Stock: 2, Description: 'Modèle 3', CoupDeCoeur: false, Image: { id: 503, url: '/images/products/portes-monnaies-3-large.jpg', formats: { large: { url: '/images/products/portes-monnaies-3-large.jpg' }, thumbnail: { url: '/images/products/portes-monnaies-3.jpg' } } } },
      { id: 504, Stock: 2, Description: 'Modèle 4', CoupDeCoeur: false, Image: { id: 504, url: '/images/products/portes-monnaies-4-large.jpg', formats: { large: { url: '/images/products/portes-monnaies-4-large.jpg' }, thumbnail: { url: '/images/products/portes-monnaies-4.jpg' } } } },
      { id: 505, Stock: 2, Description: 'Modèle 5', CoupDeCoeur: false, Image: { id: 505, url: '/images/products/portes-monnaies-5-large.jpg', formats: { large: { url: '/images/products/portes-monnaies-5-large.jpg' }, thumbnail: { url: '/images/products/portes-monnaies-5.jpg' } } } },
    ],
    get totalStock() {
      return this.declinaisons.reduce((sum, d) => sum + d.Stock, 0);
    },
  },

  {
    id: 'jphnsxcdpr04x6k1i9vzuzrv',
    title: 'TOTE BAGS',
    image_url: '/images/products/tote-bags-main.jpg',
    description: "Portez l'Afrique sur l'épaule ! Ce tote bag wax est cousu à la main au Bénin dans un tissu africain vibrant et résistant.",
    prix: 8,
    isNew: false,
    categorie: 'Sacs',
    mainImages: [
      {
        id: 6,
        url: '/images/products/tote-bags-main.jpg',
        formats: {
          large: { url: '/images/products/tote-bags-main.jpg' },
          thumbnail: { url: '/images/products/tote-bags-main.jpg' },
        },
      },
    ],
    declinaisons: [
      { id: 601, Stock: 1, Description: 'Modèle 1', CoupDeCoeur: true, Image: { id: 601, url: '/images/products/tote-bags-1-large.jpg', formats: { large: { url: '/images/products/tote-bags-1-large.jpg' }, thumbnail: { url: '/images/products/tote-bags-1.jpg' } } } },
      { id: 602, Stock: 1, Description: 'Modèle 2', CoupDeCoeur: false, Image: { id: 602, url: '/images/products/tote-bags-2-large.jpg', formats: { large: { url: '/images/products/tote-bags-2-large.jpg' }, thumbnail: { url: '/images/products/tote-bags-2.jpg' } } } },
      { id: 603, Stock: 1, Description: 'Modèle 3', CoupDeCoeur: false, Image: { id: 603, url: '/images/products/tote-bags-3-large.jpg', formats: { large: { url: '/images/products/tote-bags-3-large.jpg' }, thumbnail: { url: '/images/products/tote-bags-3.jpg' } } } },
      { id: 604, Stock: 1, Description: 'Modèle 4', CoupDeCoeur: false, Image: { id: 604, url: '/images/products/tote-bags-4-large.jpg', formats: { large: { url: '/images/products/tote-bags-4-large.jpg' }, thumbnail: { url: '/images/products/tote-bags-4.jpg' } } } },
    ],
    get totalStock() {
      return this.declinaisons.reduce((sum, d) => sum + d.Stock, 0);
    },
  },

  {
    id: 'tdsoknxfsc92735gp1ag8hp4',
    title: 'TABLIERS',
    image_url: '/images/products/tabliers-main.jpg',
    description: "Cuisinez avec style grâce à ce tablier wax fait main au Bénin ! Confectionné dans un tissu africain soigneusement sélectionné, il est autant un accessoire de cuisine qu'un vrai coup de cœur. Solide, coloré, et 100 % unique.",
    prix: 10,
    isNew: false,
    categorie: 'Accessoires',
    mainImages: [
      {
        id: 7,
        url: '/images/products/tabliers-main.jpg',
        formats: {
          large: { url: '/images/products/tabliers-main.jpg' },
          thumbnail: { url: '/images/products/tabliers-main.jpg' },
        },
      },
    ],
    declinaisons: [
      { id: 701, Stock: 0, Description: 'Modèle 1', CoupDeCoeur: false, Image: { id: 701, url: '/images/products/tabliers-main.jpg', formats: { thumbnail: { url: '/images/products/tabliers-main.jpg' } } } },
    ],
    get totalStock() {
      return this.declinaisons.reduce((sum, d) => sum + d.Stock, 0);
    },
  },
];

export function getRealisationById(id: string): Realisation | null {
  return realisations.find((r) => r.id === id) ?? null;
}

export function getRelatedRealisations(excludeId: string, limit = 4): Realisation[] {
  return realisations.filter((r) => r.id !== excludeId).slice(0, limit);
}

export function getCoupsDeCoeur() {
  const result: Array<{
    id: number;
    productId: string;
    productTitle: string;
    prix?: number;
    image_url: string;
    motif?: string;
  }> = [];

  for (const r of realisations) {
    for (const decl of r.declinaisons) {
      if (decl.CoupDeCoeur) {
        result.push({
          id: decl.id,
          productId: r.id,
          productTitle: r.title,
          prix: r.prix,
          image_url: decl.Image?.url || r.image_url || '',
          motif: decl.Description,
        });
      }
    }
  }
  return result;
}
