import {getData} from "@/app/components/api/fetchData";

// Lookup Data Get
const getLookUpData = async (lookupCode, levelId) => {
    const options = {lookupCode: lookupCode, levelId: levelId}
    return await getData('lookup/getLookupData', options);
}

export default getLookUpData;