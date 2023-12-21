  var pages = {
    'abastecimiento': ['abastecimiento', 'Abastecimiento'],
    'administrativo': ['Administrativo', 'administrativo'],
    'controldeinventario': ['Control de Inventario', 'control de inventario'],
    'logisticaadmin': ['Logistica Administrativa', 'logistica administrativa'],
    'traficoycompliance': ['abastecimiento', 'Abastecimiento']
  };
 
  function search() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var targetPage = findTargetPage(searchTerm, pages);
  
    if (targetPage) {
      window.location.href = targetPage + '.html';
    } else {
      alert('No se encontró ninguna página para el término ingresado.');
    }
  }
  
  function findTargetPage(searchTerm, pages) {
    for (var page in pages) {
      if (pages[page].includes(searchTerm)) {
        return page;
      }
    }
    return null;
  }
  
  function dynamicSearch() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var resultsContainer = document.getElementById('search-results');
  
    // Limpiar resultados anteriores
    resultsContainer.innerHTML = '';
  
    // Filtrar las páginas que coinciden con el término de búsqueda
    var matchingPages = Object.keys(pages).filter(function (page) {
      return pages[page].some(function (term) {
        return term.includes(searchTerm);
      });
    });
  
    // Mostrar los resultados
    matchingPages.forEach(function (page) {
      var resultItem = document.createElement('div');
      resultItem.textContent = page;
      
      // Agregar un evento de clic para seleccionar el resultado
      resultItem.addEventListener('click', function () {
        document.getElementById('search-input').value = page;
        resultsContainer.innerHTML = ''; // Limpiar los resultados después de seleccionar
      });
  
      resultsContainer.appendChild(resultItem);
    });
  }
  
  
  