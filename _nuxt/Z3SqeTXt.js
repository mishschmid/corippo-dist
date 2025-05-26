import{u as g}from"./Dp_cZ6X0.js";const s=`query GetPage($slug: String!) {
  pages(filters: { slug: { eqi: $slug } }, pagination: { limit: 1 }, status: DRAFT) {
    documentId
    title
    slug
    seo {
      metaTitle
      metaDescription
    }
    blocks {
      documentId
      name
      type
      highlight {
        ...HighlightFields
      }
      rich_texts {
        ...RichTextFields
      }
      media {
        url
        alternativeText
        caption
        width
        height
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
}`,c=()=>{const{query:i}=g();return{getPageBySlug:async e=>{var t;const n=await i(s,{slug:e});return(t=n==null?void 0:n.pages)==null?void 0:t[0]},getHighlightBlocks:e=>e.blocks.map(n=>n.highlight).filter(n=>n!==void 0)}};export{c as u};
