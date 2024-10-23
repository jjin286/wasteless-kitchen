import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  import paginationEllipsis from "@/utils/helper"

  export default function PaginationSection(props: {itemsPerPage: number, totalResults: number, setPage: any, activePage: number}) {
    const {itemsPerPage, totalResults, setPage, activePage} = props;
    let numberOfPages = Math.ceil(totalResults/itemsPerPage);
    console.log("Results count", totalResults, itemsPerPage, activePage, numberOfPages)


    // let pageNumbers = Array.from(Array(Math.ceil(totalResults/itemsPerPage)).keys());
    let pageNumbers = paginationEllipsis(activePage, numberOfPages, 7);
    let pages = pageNumbers!.map((page) => {
       return(
        <PaginationItem onClick={() => setPage(page)}>
          <PaginationLink isActive={activePage === page} >{page}</PaginationLink>
        </PaginationItem>
       )
    })

    function handleNextPage(){
      if(activePage < pageNumbers!.length){
        setPage(activePage + 1);
      }
    }

    function handlePrevPage(){
      if(activePage > 1){
        setPage(activePage - 1);
      }
    }

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => handlePrevPage()} />
          </PaginationItem>
          {pages}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={() => handleNextPage()} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
