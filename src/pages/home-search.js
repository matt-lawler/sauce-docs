import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList, Configure, Hits, Highlight, connectSearchBox, connectStateResults } from 'react-instantsearch-dom';
import SearchBar from '../theme/SearchBar';
import PropTypes from 'prop-types';
import React from "react";

const searchClient = algoliasearch(
    'RO95H65NEO',
    'bad6042c91ae4419a94229edf20bc8ea'
);

// TODO: maybe set search results init to display nothing on page load?
// https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-display/react/#handling-the-empty-query

const Results = connectStateResults(
    ({ searchState, searchResults, children }) =>
        searchResults && searchResults.nbHits !== 0 ? (
            children
        ) : (
            <div className="search-results">
                <h3>No results found for {searchState.query}.</h3>
            </div>
        )
);

const HomeSearch = () => (
    <div className="ais-InstantSearch">
        <SearchBar>
            <InstantSearch
                indexName="saucelabs_crawler_new_sauce"
                searchClient={searchClient}
            >
                <RefinementList attribute="categoy" />
                <Configure hitsPerPage={5} />
                <Results>
                <div>
                    {/* Hits has a className="ais-Hits" built in */}
                    <Hits hitComponent={Hit} />
                </div>
                </Results>
            </InstantSearch>
        </SearchBar>
    </div>
);

function Hit(props) {
    return (
        <div>
            <div className="hit-name">
                <a href={props.hit.url}><Highlight attribute="category" hit={props.hit} /> </a>
            </div>
        </div>
    );
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
};

export default HomeSearch;
