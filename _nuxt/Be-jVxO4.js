import{u as a}from"./BEwFzCAa.js";const l=`query GetPage($slug: String!) {
  pages(filters: { slug: { eqi: $slug } }, pagination: { limit: 1 }, status: DRAFT) {
    documentId
    title
    slug
    seo {
      metaTitle
      metaDescription
    }
    blocks(pagination: { limit: 100 }) {
      documentId
      name
      type
      billboard {
        ...BillboardFields
      }
      highlights {
        ...HighlightFields
      }
      rich_texts {
        ...RichTextFields
      }
      media {
        name
        media {
          caption
          name
          url
          alternativeText
        }
      }
      video {
        name
        url
      }
      grid {
        grid_items {
          name
          startdesktop
          enddesktop
          gridrow
          block {
            documentId
            name
            type
            billboard {
              ...BillboardFields
            }
            highlights {
              ...HighlightFields
            }
            rich_texts {
              ...RichTextFields
            }
            media {
              name
              media {
                caption
                name
                url
                alternativeText
              }
            }
            video {
              name
              url
            }
          }
        }
      }
    }
  }
}

fragment HighlightFields on Highlight {
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
}

fragment RichTextFields on RichText {
  documentId
  richText
  name
}

fragment BillboardFields on Billboard {
  eyebrow
  title
  subtitle
  fullwidth
  media {
    media {
      caption
      name
      url
      alternativeText
    }
  }
}
`,h=()=>{const{query:t}=a();return{getPageBySlug:async i=>{var n;const e=await t(l,{slug:i});return(n=e==null?void 0:e.pages)==null?void 0:n[0]},getHighlightBlocks:i=>{const e=[];return i.blocks.forEach(n=>{n.highlight&&e.push(n.highlight),n.highlights&&Array.isArray(n.highlights)&&e.push(...n.highlights)}),e}}};export{h as u};
