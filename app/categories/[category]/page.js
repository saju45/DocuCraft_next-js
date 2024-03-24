
import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

const CategoriesPage = ({params:{category}}) => {
  const docs=getDocuments();
  const matchedDocuments=getDocumentsByCategory(docs,category);
    return (
      <ContentDisplay id={matchedDocuments[0].id}/>
    )
  }
  
  export default CategoriesPage