import{u as s}from"./BWqUDJ5r.js";const g=`query GetPage($slug: String!) {
    pages(filters: { slug: { eqi: $slug } }, pagination: { limit: 1 }, status: DRAFT) {
        documentId
        title
        slug
        seo {
            metaTitle
            metaDescription
        }
        blocks {
          highlight {
            name
            slug
            title
            description
            headerImage {
              caption
              url
              alternativeText
            }
            categories_connection {
              nodes {
                slug
                name
                description
              }
            }
            categories {
              name
              slug
              description
            }
            createdAt
            updatedAt
            publishedAt
          }
        }
    }
} `,r=()=>{const{query:i}=s();return{getPageBySlug:async t=>{var e;const n=await i(g,{slug:t});return(e=n==null?void 0:n.pages)==null?void 0:e[0]},getHighlightBlocks:t=>t.blocks.map(n=>n.highlight).filter(n=>n!==void 0)}};export{r as u};
