import{u as a}from"./K9OGq1Mg.js";const l=`query GetPage($slug: String!) {
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
`,r=()=>{const{query:e}=a();return{getPageBySlug:async t=>{var n;const i=await e(l,{slug:t});return(n=i==null?void 0:i.pages)==null?void 0:n[0]},getHighlightBlocks:t=>{const i=[];return t.blocks.forEach(n=>{n.highlight&&i.push(n.highlight),n.highlights&&Array.isArray(n.highlights)&&i.push(...n.highlights)}),i}}};export{r as u};
