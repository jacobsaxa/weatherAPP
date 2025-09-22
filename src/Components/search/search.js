import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_URL, GEO_OPTIONS } from "../../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (searchInputValue) => {
        return fetch(
            `${GEO_URL}?namePrefix=${searchInputValue}&limit=10&sort=-population`,
            GEO_OPTIONS
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.region}, ${city.countryCode}`,
                        };
                    }),
                };
            })
            .catch((error) => console.error(error));
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;
