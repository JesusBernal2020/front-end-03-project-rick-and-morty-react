export const paginationLogic = (currentPage, residents) => {
  if (!residents) {
    return {
      pages: [1],
      residentsInPage: [],
    };
  }

  //cantidad de residentes por pagina
  const RESIDENTS_PER_PAGE = 20;

  //cantidad total de pagina
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  //residentes que se van a mostrar en la pagina actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  //generacion del arrelgo que se van a mostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return {
    residentsInPage,
    pages,
  };
};
