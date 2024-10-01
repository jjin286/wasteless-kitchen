
/**
 * Takes in total numbers of pages and the number of pages to be displayed
 * Returns an array of pages to be displayed on pagination
 */
export default function paginationEllipsis(currPage: number, total : number, numDisplay : number){
  let pageNumbers = Array.from(Array(total).keys()).slice(1);
  let left = Math.floor(numDisplay / 2);
  let right = numDisplay - left;

  //When numbers of pages exceed the total, show all pages
  if(numDisplay > total) return pageNumbers;

  // When the current page minus left is greater than 0, display numbers left and right of current page
  if(currPage - left > 0) return pageNumbers.slice(currPage - left, currPage + right);

  // When the current page plus the numbers that should appear on the right, show all pages to end wwith ellipsis at start
  if(currPage + right > total) return pageNumbers.slice(-numDisplay);

  // When the current page minus the left is less than 0, show from first page to dispay count
  if(currPage <= numDisplay) return pageNumbers.slice(0, numDisplay);
}