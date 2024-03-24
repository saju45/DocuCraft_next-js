import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

const TagsPage = ({params:{tag}}) => {

  const docs=getDocuments();
  const matchedDocs=getDocumentsByTag(docs,tag)
    return (
      <ContentDisplay id={matchedDocs[0].id}/>
    )
  }
  
  export default TagsPage