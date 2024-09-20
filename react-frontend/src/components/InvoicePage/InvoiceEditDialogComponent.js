import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const InvoiceCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    const [invoicetype, setInvoicetype] = useState([])
const [identifiertype, setIdentifiertype] = useState([])
const [thefirstsuppliercontactnumber, setThefirstsuppliercontactnumber] = useState([])
const [suppliercountryname, setSuppliercountryname] = useState([])
const [supplierstatename, setSupplierstatename] = useState([])
const [buyeridentifiertype, setBuyeridentifiertype] = useState([])
const [buyercountryname, setBuyercountryname] = useState([])
const [buyerstatename, setBuyerstatename] = useState([])
const [thefirstbuyercontactnumber, setThefirstbuyercontactnumber] = useState([])
const [invoicecurrency, setInvoicecurrency] = useState([])
const [frequencyofbilling, setFrequencyofbilling] = useState([])
const [paymentmode, setPaymentmode] = useState([])
const [shippingrecipientidentifiertype, setShippingrecipientidentifiertype] = useState([])
const [invoicelineclassification, setInvoicelineclassification] = useState([])
const [measurement, setMeasurement] = useState([])
const [countryoforigin, setCountryoforigin] = useState([])
const [taxtype, setTaxtype] = useState([])
const [detailtaxtype, setDetailtaxtype] = useState([])

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

     useEffect(() => {
                    //on mount identifyType
                    client
                        .service("identifyType")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleIdentifyTypeId } })
                        .then((res) => {
                            setInvoicetype(res.data.map((e) => { return { name: e['identifytype'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "IdentifyType", type: "error", message: error.message || "Failed get identifyType" });
                        });
                }, []);
 useEffect(() => {
                    //on mount phoneNumberPrefix
                    client
                        .service("phoneNumberPrefix")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singlePhoneNumberPrefixId } })
                        .then((res) => {
                            setThefirstsuppliercontactnumber(res.data.map((e) => { return { name: e['phonenumberprefix'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "PhoneNumberPrefix", type: "error", message: error.message || "Failed get phoneNumberPrefix" });
                        });
                }, []);
 useEffect(() => {
                    //on mount countryCode
                    client
                        .service("countryCode")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleCountryCodeId } })
                        .then((res) => {
                            setSuppliercountryname(res.data.map((e) => { return { name: e['countrycode'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "CountryCode", type: "error", message: error.message || "Failed get countryCode" });
                        });
                }, []);
 useEffect(() => {
                    //on mount stateCode
                    client
                        .service("stateCode")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleStateCodeId } })
                        .then((res) => {
                            setSupplierstatename(res.data.map((e) => { return { name: e['statecode'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "StateCode", type: "error", message: error.message || "Failed get stateCode" });
                        });
                }, []);
 useEffect(() => {
                    //on mount currencyCode
                    client
                        .service("currencyCode")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleCurrencyCodeId } })
                        .then((res) => {
                            setInvoicecurrency(res.data.map((e) => { return { name: e['currencycode'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "CurrencyCode", type: "error", message: error.message || "Failed get currencyCode" });
                        });
                }, []);
 useEffect(() => {
                    //on mount frequencyOfBilling
                    client
                        .service("frequencyOfBilling")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleFrequencyOfBillingId } })
                        .then((res) => {
                            setFrequencyofbilling(res.data.map((e) => { return { name: e['frequencyofbilling'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "FrequencyOfBilling", type: "error", message: error.message || "Failed get frequencyOfBilling" });
                        });
                }, []);
 useEffect(() => {
                    //on mount paymentMode
                    client
                        .service("paymentMode")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singlePaymentModeId } })
                        .then((res) => {
                            setPaymentmode(res.data.map((e) => { return { name: e['paymentmode'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "PaymentMode", type: "error", message: error.message || "Failed get paymentMode" });
                        });
                }, []);
 useEffect(() => {
                    //on mount classificationCode
                    client
                        .service("classificationCode")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleClassificationCodeId } })
                        .then((res) => {
                            setInvoicelineclassification(res.data.map((e) => { return { name: e['classificationcode'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "ClassificationCode", type: "error", message: error.message || "Failed get classificationCode" });
                        });
                }, []);
 useEffect(() => {
                    //on mount measurement
                    client
                        .service("measurement")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleMeasurementId } })
                        .then((res) => {
                            setMeasurement(res.data.map((e) => { return { name: e['measurement'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Measurement", type: "error", message: error.message || "Failed get measurement" });
                        });
                }, []);
 useEffect(() => {
                    //on mount taxType
                    client
                        .service("taxType")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleTaxTypeId } })
                        .then((res) => {
                            setTaxtype(res.data.map((e) => { return { name: e['taxtype'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "TaxType", type: "error", message: error.message || "Failed get taxType" });
                        });
                }, []);

    const onSave = async () => {
        let _data = {
            noff: _entity?.noff,
invoicetype: _entity?.invoicetype?._id,
invoicedateandtime: _entity?.invoicedateandtime,
originaleinvoicereferencenumber: _entity?.originaleinvoicereferencenumber,
suppliername: _entity?.suppliername,
suppliertin: _entity?.suppliertin,
suppliersstregistrationnumber: _entity?.suppliersstregistrationnumber,
identifiertype: _entity?.identifiertype?._id,
identifiernumber: _entity?.identifiernumber,
suppliermsiccode: _entity?.suppliermsiccode,
suppliertourismtaxregistrationnumber: _entity?.suppliertourismtaxregistrationnumber,
supplierbusinessactivitydescription: _entity?.supplierbusinessactivitydescription,
supplieremail: _entity?.supplieremail,
thefirstsuppliercontactnumber: _entity?.thefirstsuppliercontactnumber?._id,
suppliercontactnumber: _entity?.suppliercontactnumber,
suppliercountryname: _entity?.suppliercountryname?._id,
supplierstatename: _entity?.supplierstatename?._id,
suppliercityname: _entity?.suppliercityname,
supplierpostalzone: _entity?.supplierpostalzone,
supplieradressline0: _entity?.supplieradressline0,
supplieradressline1: _entity?.supplieradressline1,
supplieraddressline2: _entity?.supplieraddressline2,
buyername: _entity?.buyername,
buyertin: _entity?.buyertin,
buyersstregistrationnumber: _entity?.buyersstregistrationnumber,
buyeridentifiertype: _entity?.buyeridentifiertype?._id,
buyerbusinessregistrationnumber: _entity?.buyerbusinessregistrationnumber,
buyeremail: _entity?.buyeremail,
buyercountryname: _entity?.buyercountryname?._id,
buyerstatename: _entity?.buyerstatename?._id,
buyercityname: _entity?.buyercityname,
buyerpostalzone: _entity?.buyerpostalzone,
buyeraddressline0: _entity?.buyeraddressline0,
buyeraddressline1: _entity?.buyeraddressline1,
buyeraddressline2: _entity?.buyeraddressline2,
thefirstbuyercontactnumber: _entity?.thefirstbuyercontactnumber?._id,
buyercontactnumber: _entity?.buyercontactnumber,
invoicecurrency: _entity?.invoicecurrency?._id,
currencyexchangerate: _entity?.currencyexchangerate,
frequencyofbilling: _entity?.frequencyofbilling?._id,
billingperiodstartdate: _entity?.billingperiodstartdate,
billingperiodenddate: _entity?.billingperiodenddate,
paymentmode: _entity?.paymentmode?._id,
supplierbankaccountnumber: _entity?.supplierbankaccountnumber,
paymentterms: _entity?.paymentterms,
prepaymentamount: _entity?.prepaymentamount,
prepaymentdate: _entity?.prepaymentdate,
prepaymentreferencenumber: _entity?.prepaymentreferencenumber,
shippingrecipientname: _entity?.shippingrecipientname,
shippingrecipientcountryname: _entity?.shippingrecipientcountryname,
shippingrecipientstatename: _entity?.shippingrecipientstatename,
shippingrecipientcityname: _entity?.shippingrecipientcityname,
shippingrecipientpostalzone: _entity?.shippingrecipientpostalzone,
shippingrecipientaddressline0: _entity?.shippingrecipientaddressline0,
shippingrecipientaddressline1: _entity?.shippingrecipientaddressline1,
shippingrecipientaddressline2: _entity?.shippingrecipientaddressline2,
shippingrecipienttin: _entity?.shippingrecipienttin,
shippingrecipientidentifiertype: _entity?.shippingrecipientidentifiertype?._id,
shippingrecipientbusinessregistrationnumber: _entity?.shippingrecipientbusinessregistrationnumber,
billreferencenumber: _entity?.billreferencenumber,
referencenumberofcustomsformno1: _entity?.referencenumberofcustomsformno1,
incoterms: _entity?.incoterms,
freetradeagreementinformation: _entity?.freetradeagreementinformation,
authorisationnumberforcertifiedexporter: _entity?.authorisationnumberforcertifiedexporter,
referencenumberofcustomsformno2: _entity?.referencenumberofcustomsformno2,
invoicelinenumber: _entity?.invoicelinenumber,
invoicelineclassification: _entity?.invoicelineclassification?._id,
productname: _entity?.productname,
quantity: _entity?.quantity,
unitprice: _entity?.unitprice,
measurement: _entity?.measurement?._id,
subtotal: _entity?.subtotal,
countryoforigin: _entity?.countryoforigin?._id,
pretotalexcludingtax: _entity?.pretotalexcludingtax,
taxtype: _entity?.taxtype?._id,
taxrate: _entity?.taxrate,
taxamount: _entity?.taxamount,
taxdescription: _entity?.taxdescription,
taxexemptiondetails: _entity?.taxexemptiondetails,
taxexemptionamount: _entity?.taxexemptionamount,
discountrate: _entity?.discountrate,
discountamount: _entity?.discountamount,
discountdescription: _entity?.discountdescription,
feeorchargerate: _entity?.feeorchargerate,
feeorchargeamount: _entity?.feeorchargeamount,
feeorchargedescription: _entity?.feeorchargedescription,
detailtaxtype: _entity?.detailtaxtype?._id,
detailtotaltaxamountpertaxtype: _entity?.detailtotaltaxamountpertaxtype,
detailtotaltaxableamount: _entity?.detailtotaltaxableamount,
detailsoftaxexemption: _entity?.detailsoftaxexemption,
amountexemptedfromtax: _entity?.amountexemptedfromtax,
additionaldiscountamount: _entity?.additionaldiscountamount,
additionaldiscountdescription: _entity?.additionaldiscountdescription,
additionalfeeamount: _entity?.additionalfeeamount,
additionalfeedescription: _entity?.additionalfeedescription,
otherfeeorchargeamounts: _entity?.otherfeeorchargeamounts,
othrefeeorchargedescription: _entity?.othrefeeorchargedescription,
totaldiscountvalue: _entity?.totaldiscountvalue,
totalfeeorchargeamount: _entity?.totalfeeorchargeamount,
totaltaxamount: _entity?.totaltaxamount,
totalexcludingtax: _entity?.totalexcludingtax,
totalnetamount: _entity?.totalnetamount,
totalincludingtax: _entity?.totalincludingtax,
roundingamount: _entity?.roundingamount,
totalpayableamount: _entity?.totalpayableamount,
invoicenumber: _entity?.invoicenumber,
        };

        setLoading(true);
        try {
            
        await client.service("invoice").patch(_entity._id, _data);
        const eagerResult = await client
            .service("invoice")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[_entity._id]}, $populate : [
                {
                    path : "invoicetype",
                    service : "identifyType",
                    select:["identifytype"]},{
                    path : "thefirstsuppliercontactnumber",
                    service : "phoneNumberPrefix",
                    select:["phonenumberprefix"]},{
                    path : "suppliercountryname",
                    service : "countryCode",
                    select:["countrycode"]},{
                    path : "supplierstatename",
                    service : "stateCode",
                    select:["statecode"]},{
                    path : "invoicecurrency",
                    service : "currencyCode",
                    select:["currencycode"]},{
                    path : "frequencyofbilling",
                    service : "frequencyOfBilling",
                    select:["frequencyofbilling"]},{
                    path : "paymentmode",
                    service : "paymentMode",
                    select:["paymentmode"]},{
                    path : "invoicelineclassification",
                    service : "classificationCode",
                    select:["classificationcode"]},{
                    path : "measurement",
                    service : "measurement",
                    select:["measurement"]},{
                    path : "taxtype",
                    service : "taxType",
                    select:["taxtype"]}
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info invoice updated successfully" });
        props.onEditResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    const invoicetypeOptions = invoicetype.map((elem) => ({ name: elem.name, value: elem.value }));
const identifiertypeOptions = identifiertype.map((elem) => ({ name: elem.name, value: elem.value }));
const thefirstsuppliercontactnumberOptions = thefirstsuppliercontactnumber.map((elem) => ({ name: elem.name, value: elem.value }));
const suppliercountrynameOptions = suppliercountryname.map((elem) => ({ name: elem.name, value: elem.value }));
const supplierstatenameOptions = supplierstatename.map((elem) => ({ name: elem.name, value: elem.value }));
const buyeridentifiertypeOptions = buyeridentifiertype.map((elem) => ({ name: elem.name, value: elem.value }));
const buyercountrynameOptions = buyercountryname.map((elem) => ({ name: elem.name, value: elem.value }));
const buyerstatenameOptions = buyerstatename.map((elem) => ({ name: elem.name, value: elem.value }));
const thefirstbuyercontactnumberOptions = thefirstbuyercontactnumber.map((elem) => ({ name: elem.name, value: elem.value }));
const invoicecurrencyOptions = invoicecurrency.map((elem) => ({ name: elem.name, value: elem.value }));
const frequencyofbillingOptions = frequencyofbilling.map((elem) => ({ name: elem.name, value: elem.value }));
const paymentmodeOptions = paymentmode.map((elem) => ({ name: elem.name, value: elem.value }));
const shippingrecipientidentifiertypeOptions = shippingrecipientidentifiertype.map((elem) => ({ name: elem.name, value: elem.value }));
const invoicelineclassificationOptions = invoicelineclassification.map((elem) => ({ name: elem.name, value: elem.value }));
const measurementOptions = measurement.map((elem) => ({ name: elem.name, value: elem.value }));
const countryoforiginOptions = countryoforigin.map((elem) => ({ name: elem.name, value: elem.value }));
const taxtypeOptions = taxtype.map((elem) => ({ name: elem.name, value: elem.value }));
const detailtaxtypeOptions = detailtaxtype.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Edit Invoice" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="invoice-edit-dialog-component">
                <div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="noff">Noff:</label>
            <InputText id="noff" className="w-full mb-3 p-inputtext-sm" value={_entity?.noff} onChange={(e) => setValByKey("noff", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicetype">Invoice Type:</label>
            <Dropdown id="invoicetype" value={_entity?.invoicetype?._id} optionLabel="name" optionValue="value" options={invoicetypeOptions} onChange={(e) => setValByKey("invoicetype", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicedateandtime">Invoice Date and Time:</label>
            <Calendar id="invoicedateandtime" value={_entity?.invoicedateandtime ? new Date(_entity?.invoicedateandtime) : new Date()} onChange={ (e) => setValByKey("invoicedateandtime", new Date(e.target.value))} showIcon showButtonBar  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="originaleinvoicereferencenumber">Original eInvoice Reference No:</label>
            <InputText id="originaleinvoicereferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.originaleinvoicereferencenumber} onChange={(e) => setValByKey("originaleinvoicereferencenumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliername">Supplier Name:</label>
            <InputText id="suppliername" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliername} onChange={(e) => setValByKey("suppliername", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliertin">Supplier TIN:</label>
            <InputText id="suppliertin" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliertin} onChange={(e) => setValByKey("suppliertin", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersstregistrationnumber">Supplier SST Registration No:</label>
            <InputText id="suppliersstregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersstregistrationnumber} onChange={(e) => setValByKey("suppliersstregistrationnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="identifiertype">Identifier Type:</label>
            <Dropdown id="identifiertype" value={_entity?.identifiertype?._id} optionLabel="name" optionValue="value" options={identifiertypeOptions} onChange={(e) => setValByKey("identifiertype", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="identifiernumber">Identifier Number:</label>
            <InputText id="identifiernumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.identifiernumber} onChange={(e) => setValByKey("identifiernumber", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliermsiccode">Supplier MSIC Code:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliertourismtaxregistrationnumber">Supplier Tourism Tax Reg No:</label>
            <InputText id="suppliertourismtaxregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliertourismtaxregistrationnumber} onChange={(e) => setValByKey("suppliertourismtaxregistrationnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierbusinessactivitydescription">Supplier Business ActivityDesc:</label>
            <InputText id="supplierbusinessactivitydescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierbusinessactivitydescription} onChange={(e) => setValByKey("supplierbusinessactivitydescription", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplieremail">Supplier email:</label>
            <InputText id="supplieremail" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieremail} onChange={(e) => setValByKey("supplieremail", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="thefirstsuppliercontactnumber">First Supplier Contact Number:</label>
            <Dropdown id="thefirstsuppliercontactnumber" value={_entity?.thefirstsuppliercontactnumber?._id} optionLabel="name" optionValue="value" options={thefirstsuppliercontactnumberOptions} onChange={(e) => setValByKey("thefirstsuppliercontactnumber", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliercontactnumber">Supplier Contact Number:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliercountryname">Supplier Country Name:</label>
            <Dropdown id="suppliercountryname" value={_entity?.suppliercountryname?._id} optionLabel="name" optionValue="value" options={suppliercountrynameOptions} onChange={(e) => setValByKey("suppliercountryname", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierstatename">Supplier State Name:</label>
            <Dropdown id="supplierstatename" value={_entity?.supplierstatename?._id} optionLabel="name" optionValue="value" options={supplierstatenameOptions} onChange={(e) => setValByKey("supplierstatename", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliercityname">Supplier City Name:</label>
            <InputText id="suppliercityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliercityname} onChange={(e) => setValByKey("suppliercityname", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierpostalzone">Supplier Postal Zone:</label>
            <InputNumber id="supplierpostalzone" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierpostalzone} onChange={(e) => setValByKey("supplierpostalzone", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplieradressline0">Supplier Adress Line 0:</label>
            <InputText id="supplieradressline0" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieradressline0} onChange={(e) => setValByKey("supplieradressline0", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplieradressline1">Supplier Adress Line 1:</label>
            <InputText id="supplieradressline1" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieradressline1} onChange={(e) => setValByKey("supplieradressline1", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplieraddressline2">Supplier Address Line 2:</label>
            <InputText id="supplieraddressline2" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieraddressline2} onChange={(e) => setValByKey("supplieraddressline2", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyername">Buyer Name:</label>
            <InputText id="buyername" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyername} onChange={(e) => setValByKey("buyername", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyertin">Buyer TIN:</label>
            <InputText id="buyertin" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyertin} onChange={(e) => setValByKey("buyertin", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersstregistrationnumber">Buyer SST Registration Number:</label>
            <InputText id="buyersstregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersstregistrationnumber} onChange={(e) => setValByKey("buyersstregistrationnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyeridentifiertype">Buyer Identifier Type:</label>
            <Dropdown id="buyeridentifiertype" value={_entity?.buyeridentifiertype?._id} optionLabel="name" optionValue="value" options={buyeridentifiertypeOptions} onChange={(e) => setValByKey("buyeridentifiertype", {_id : e.value})}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyerbusinessregistrationnumber">Buyer Business Registration No:</label>
            <InputText id="buyerbusinessregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerbusinessregistrationnumber} onChange={(e) => setValByKey("buyerbusinessregistrationnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyeremail">Buyer email:</label>
            <InputText id="buyeremail" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeremail} onChange={(e) => setValByKey("buyeremail", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyercountryname">Buyer Country Name:</label>
            <Dropdown id="buyercountryname" value={_entity?.buyercountryname?._id} optionLabel="name" optionValue="value" options={buyercountrynameOptions} onChange={(e) => setValByKey("buyercountryname", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyerstatename">Buyer State Name:</label>
            <Dropdown id="buyerstatename" value={_entity?.buyerstatename?._id} optionLabel="name" optionValue="value" options={buyerstatenameOptions} onChange={(e) => setValByKey("buyerstatename", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyercityname">Buyer City Name:</label>
            <InputText id="buyercityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercityname} onChange={(e) => setValByKey("buyercityname", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyerpostalzone">Buyerpostalzone:</label>
            <InputNumber id="buyerpostalzone" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerpostalzone} onChange={(e) => setValByKey("buyerpostalzone", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyeraddressline0">Buyer Address Line 0:</label>
            <InputText id="buyeraddressline0" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeraddressline0} onChange={(e) => setValByKey("buyeraddressline0", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyeraddressline1">Buyer Address Line 1:</label>
            <InputText id="buyeraddressline1" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeraddressline1} onChange={(e) => setValByKey("buyeraddressline1", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyeraddressline2">Buyer Address Line 2:</label>
            <InputText id="buyeraddressline2" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeraddressline2} onChange={(e) => setValByKey("buyeraddressline2", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="thefirstbuyercontactnumber">The First Buyer Contact Number:</label>
            <Dropdown id="thefirstbuyercontactnumber" value={_entity?.thefirstbuyercontactnumber?._id} optionLabel="name" optionValue="value" options={thefirstbuyercontactnumberOptions} onChange={(e) => setValByKey("thefirstbuyercontactnumber", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyercontactnumber">Buyer Contact Number:</label>
            <InputNumber id="buyercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercontactnumber} onChange={(e) => setValByKey("buyercontactnumber", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicecurrency">Invoice Currency:</label>
            <Dropdown id="invoicecurrency" value={_entity?.invoicecurrency?._id} optionLabel="name" optionValue="value" options={invoicecurrencyOptions} onChange={(e) => setValByKey("invoicecurrency", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="currencyexchangerate">Currency Exchange Rate:</label>
            <InputNumber id="currencyexchangerate" className="w-full mb-3 p-inputtext-sm" value={_entity?.currencyexchangerate} onChange={(e) => setValByKey("currencyexchangerate", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="frequencyofbilling">Frequency of Billing:</label>
            <Dropdown id="frequencyofbilling" value={_entity?.frequencyofbilling?._id} optionLabel="name" optionValue="value" options={frequencyofbillingOptions} onChange={(e) => setValByKey("frequencyofbilling", {_id : e.value})}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billingperiodstartdate">Billing Period Start Date:</label>
            <Calendar id="billingperiodstartdate" value={_entity?.billingperiodstartdate ? new Date(_entity?.billingperiodstartdate) : new Date()} onChange={ (e) => setValByKey("billingperiodstartdate", new Date(e.target.value))} showIcon showButtonBar  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billingperiodenddate">Billing Period End Date:</label>
            <Calendar id="billingperiodenddate" value={_entity?.billingperiodenddate ? new Date(_entity?.billingperiodenddate) : new Date()} onChange={ (e) => setValByKey("billingperiodenddate", new Date(e.target.value))} showIcon showButtonBar  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentmode">Payment Mode:</label>
            <Dropdown id="paymentmode" value={_entity?.paymentmode?._id} optionLabel="name" optionValue="value" options={paymentmodeOptions} onChange={(e) => setValByKey("paymentmode", {_id : e.value})}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierbankaccountnumber">Supplier Bank Account Number:</label>
            <InputNumber id="supplierbankaccountnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierbankaccountnumber} onChange={(e) => setValByKey("supplierbankaccountnumber", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentterms">Payment Terms:</label>
            <InputText id="paymentterms" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentterms} onChange={(e) => setValByKey("paymentterms", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="prepaymentamount">Pre Payment Amount:</label>
            <InputNumber id="prepaymentamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.prepaymentamount} onChange={(e) => setValByKey("prepaymentamount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="prepaymentdate">Pre Payment Date:</label>
            <Calendar id="prepaymentdate" value={_entity?.prepaymentdate ? new Date(_entity?.prepaymentdate) : new Date()} onChange={ (e) => setValByKey("prepaymentdate", new Date(e.target.value))} showIcon showButtonBar  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="prepaymentreferencenumber">Pre Payment Reference Number:</label>
            <InputText id="prepaymentreferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.prepaymentreferencenumber} onChange={(e) => setValByKey("prepaymentreferencenumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientname">Shipping Recipient Name:</label>
            <InputText id="shippingrecipientname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientname} onChange={(e) => setValByKey("shippingrecipientname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientcountryname">Shipping Recipient CountryName:</label>
            <InputText id="shippingrecipientcountryname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientcountryname} onChange={(e) => setValByKey("shippingrecipientcountryname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientstatename">Shipping Recipient State Name:</label>
            <InputText id="shippingrecipientstatename" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientstatename} onChange={(e) => setValByKey("shippingrecipientstatename", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientcityname">Shipping Recipient City Name:</label>
            <InputText id="shippingrecipientcityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientcityname} onChange={(e) => setValByKey("shippingrecipientcityname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientpostalzone">Shipping Recipient Postal Zone:</label>
            <InputNumber id="shippingrecipientpostalzone" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientpostalzone} onChange={(e) => setValByKey("shippingrecipientpostalzone", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientaddressline0">Recipient Address Line 0:</label>
            <InputText id="shippingrecipientaddressline0" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientaddressline0} onChange={(e) => setValByKey("shippingrecipientaddressline0", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientaddressline1">Recipient Address Line 1:</label>
            <InputText id="shippingrecipientaddressline1" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientaddressline1} onChange={(e) => setValByKey("shippingrecipientaddressline1", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientaddressline2">Recipient Address Line 2:</label>
            <InputText id="shippingrecipientaddressline2" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientaddressline2} onChange={(e) => setValByKey("shippingrecipientaddressline2", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipienttin">Shipping Recipient TIN:</label>
            <InputText id="shippingrecipienttin" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipienttin} onChange={(e) => setValByKey("shippingrecipienttin", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientidentifiertype">Shippingrecipientidentifiertype:</label>
            <Dropdown id="shippingrecipientidentifiertype" value={_entity?.shippingrecipientidentifiertype?._id} optionLabel="name" optionValue="value" options={shippingrecipientidentifiertypeOptions} onChange={(e) => setValByKey("shippingrecipientidentifiertype", {_id : e.value})}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientbusinessregistrationnumber">Shipping Recipient Biz Reg No:</label>
            <InputText id="shippingrecipientbusinessregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientbusinessregistrationnumber} onChange={(e) => setValByKey("shippingrecipientbusinessregistrationnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billreferencenumber">Bill Reference Number:</label>
            <InputText id="billreferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.billreferencenumber} onChange={(e) => setValByKey("billreferencenumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="referencenumberofcustomsformno1">Ref No of Custom Form No1:</label>
            <InputText id="referencenumberofcustomsformno1" className="w-full mb-3 p-inputtext-sm" value={_entity?.referencenumberofcustomsformno1} onChange={(e) => setValByKey("referencenumberofcustomsformno1", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="incoterms">Incoterms:</label>
            <InputText id="incoterms" className="w-full mb-3 p-inputtext-sm" value={_entity?.incoterms} onChange={(e) => setValByKey("incoterms", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="freetradeagreementinformation">Free Trade Agreement Info:</label>
            <InputText id="freetradeagreementinformation" className="w-full mb-3 p-inputtext-sm" value={_entity?.freetradeagreementinformation} onChange={(e) => setValByKey("freetradeagreementinformation", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="authorisationnumberforcertifiedexporter">Authorisation No of Exporter:</label>
            <InputText id="authorisationnumberforcertifiedexporter" className="w-full mb-3 p-inputtext-sm" value={_entity?.authorisationnumberforcertifiedexporter} onChange={(e) => setValByKey("authorisationnumberforcertifiedexporter", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="referencenumberofcustomsformno2">Ref No of Custom Form No2:</label>
            <InputText id="referencenumberofcustomsformno2" className="w-full mb-3 p-inputtext-sm" value={_entity?.referencenumberofcustomsformno2} onChange={(e) => setValByKey("referencenumberofcustomsformno2", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicelinenumber">Invoicelinenumber:</label>
            <InputText id="invoicelinenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicelinenumber} onChange={(e) => setValByKey("invoicelinenumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicelineclassification">Invoice Line Classification:</label>
            <Dropdown id="invoicelineclassification" value={_entity?.invoicelineclassification?._id} optionLabel="name" optionValue="value" options={invoicelineclassificationOptions} onChange={(e) => setValByKey("invoicelineclassification", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="productname">Product Name:</label>
            <InputText id="productname" className="w-full mb-3 p-inputtext-sm" value={_entity?.productname} onChange={(e) => setValByKey("productname", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="quantity">Quantity:</label>
            <InputNumber id="quantity" className="w-full mb-3 p-inputtext-sm" value={_entity?.quantity} onChange={(e) => setValByKey("quantity", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="unitprice">Unit Price:</label>
            <InputNumber id="unitprice" className="w-full mb-3 p-inputtext-sm" value={_entity?.unitprice} onChange={(e) => setValByKey("unitprice", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="measurement">Measurement:</label>
            <Dropdown id="measurement" value={_entity?.measurement?._id} optionLabel="name" optionValue="value" options={measurementOptions} onChange={(e) => setValByKey("measurement", {_id : e.value})}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="subtotal">Subtotal:</label>
            <InputNumber id="subtotal" className="w-full mb-3 p-inputtext-sm" value={_entity?.subtotal} onChange={(e) => setValByKey("subtotal", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="countryoforigin">Country of Origin:</label>
            <Dropdown id="countryoforigin" value={_entity?.countryoforigin?._id} optionLabel="name" optionValue="value" options={countryoforiginOptions} onChange={(e) => setValByKey("countryoforigin", {_id : e.value})}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="pretotalexcludingtax">Pretotalexcludingtax:</label>
            <InputNumber id="pretotalexcludingtax" className="w-full mb-3 p-inputtext-sm" value={_entity?.pretotalexcludingtax} onChange={(e) => setValByKey("pretotalexcludingtax", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxtype">Tax Type:</label>
            <Dropdown id="taxtype" value={_entity?.taxtype?._id} optionLabel="name" optionValue="value" options={taxtypeOptions} onChange={(e) => setValByKey("taxtype", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxrate">Tax Rate:</label>
            <InputNumber id="taxrate" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxrate} onChange={(e) => setValByKey("taxrate", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxamount">Tax Amount:</label>
            <InputNumber id="taxamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxamount} onChange={(e) => setValByKey("taxamount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxdescription">Tax Description:</label>
            <InputText id="taxdescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxdescription} onChange={(e) => setValByKey("taxdescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxexemptiondetails">Tax Exemption Details:</label>
            <InputText id="taxexemptiondetails" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxexemptiondetails} onChange={(e) => setValByKey("taxexemptiondetails", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxexemptionamount">Tax Exemption Amount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="discountrate">Discount Rate:</label>
            <InputNumber id="discountrate" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountrate} onChange={(e) => setValByKey("discountrate", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="discountamount">Discount Amount:</label>
            <InputNumber id="discountamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountamount} onChange={(e) => setValByKey("discountamount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="discountdescription">Discount Description:</label>
            <InputText id="discountdescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountdescription} onChange={(e) => setValByKey("discountdescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="feeorchargerate">Fee or Charge Rate:</label>
            <InputNumber id="feeorchargerate" className="w-full mb-3 p-inputtext-sm" value={_entity?.feeorchargerate} onChange={(e) => setValByKey("feeorchargerate", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="feeorchargeamount">Fee or Charge Amount:</label>
            <InputNumber id="feeorchargeamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.feeorchargeamount} onChange={(e) => setValByKey("feeorchargeamount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="feeorchargedescription">Fee or Charge Description:</label>
            <InputText id="feeorchargedescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.feeorchargedescription} onChange={(e) => setValByKey("feeorchargedescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="detailtaxtype">Detail Tax Type:</label>
            <Dropdown id="detailtaxtype" value={_entity?.detailtaxtype?._id} optionLabel="name" optionValue="value" options={detailtaxtypeOptions} onChange={(e) => setValByKey("detailtaxtype", {_id : e.value})}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="detailtotaltaxamountpertaxtype">Total Tax Amount per Tax Type :</label>
            <InputNumber id="detailtotaltaxamountpertaxtype" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailtotaltaxamountpertaxtype} onChange={(e) => setValByKey("detailtotaltaxamountpertaxtype", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="detailtotaltaxableamount">Detail Total Taxable Amount:</label>
            <InputNumber id="detailtotaltaxableamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailtotaltaxableamount} onChange={(e) => setValByKey("detailtotaltaxableamount", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="detailsoftaxexemption">Details of Tax Exemption:</label>
            <InputText id="detailsoftaxexemption" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailsoftaxexemption} onChange={(e) => setValByKey("detailsoftaxexemption", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="amountexemptedfromtax">Amount Eexempted from Tax:</label>
            <InputNumber id="amountexemptedfromtax" className="w-full mb-3 p-inputtext-sm" value={_entity?.amountexemptedfromtax} onChange={(e) => setValByKey("amountexemptedfromtax", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="additionaldiscountamount">Additional Discount Amount:</label>
            <InputNumber id="additionaldiscountamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.additionaldiscountamount} onChange={(e) => setValByKey("additionaldiscountamount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="additionaldiscountdescription">Additional Discount Desc:</label>
            <InputText id="additionaldiscountdescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.additionaldiscountdescription} onChange={(e) => setValByKey("additionaldiscountdescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="additionalfeeamount">Additionalfeeamount:</label>
            <InputNumber id="additionalfeeamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.additionalfeeamount} onChange={(e) => setValByKey("additionalfeeamount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="additionalfeedescription">Additional Fee Description:</label>
            <InputText id="additionalfeedescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.additionalfeedescription} onChange={(e) => setValByKey("additionalfeedescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="otherfeeorchargeamounts">Otherfeeorchargeamounts:</label>
            <InputNumber id="otherfeeorchargeamounts" className="w-full mb-3 p-inputtext-sm" value={_entity?.otherfeeorchargeamounts} onChange={(e) => setValByKey("otherfeeorchargeamounts", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="othrefeeorchargedescription">Othre Fee or Charge Desc:</label>
            <InputText id="othrefeeorchargedescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.othrefeeorchargedescription} onChange={(e) => setValByKey("othrefeeorchargedescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totaldiscountvalue">Total Discount Value:</label>
            <InputNumber id="totaldiscountvalue" className="w-full mb-3 p-inputtext-sm" value={_entity?.totaldiscountvalue} onChange={(e) => setValByKey("totaldiscountvalue", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalfeeorchargeamount">Total Fee or Charge Amount:</label>
            <InputNumber id="totalfeeorchargeamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalfeeorchargeamount} onChange={(e) => setValByKey("totalfeeorchargeamount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totaltaxamount">Total Tax Amount:</label>
            <InputNumber id="totaltaxamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totaltaxamount} onChange={(e) => setValByKey("totaltaxamount", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalexcludingtax">Total Excluding Tax:</label>
            <InputNumber id="totalexcludingtax" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalexcludingtax} onChange={(e) => setValByKey("totalexcludingtax", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalnetamount">Total Net Amount:</label>
            <InputNumber id="totalnetamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalnetamount} onChange={(e) => setValByKey("totalnetamount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalincludingtax">Total Including Tax:</label>
            <InputNumber id="totalincludingtax" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalincludingtax} onChange={(e) => setValByKey("totalincludingtax", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="roundingamount">Rounding Amount:</label>
            <InputNumber id="roundingamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.roundingamount} onChange={(e) => setValByKey("roundingamount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalpayableamount">Total Payable Amount:</label>
            <InputNumber id="totalpayableamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalpayableamount} onChange={(e) => setValByKey("totalpayableamount", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicenumber">Invoice Number:</label>
            <InputText id="invoicenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicenumber} onChange={(e) => setValByKey("invoicenumber", e.target.value)}  required  />
        </span>
        </div>
                <div className="col-12">&nbsp;</div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="created At:"></Tag>{" " + moment(_entity?.createdAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="created By:"></Tag>{" " +_entity?.createdBy?.name}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="last Updated At:"></Tag>{" " + moment(_entity?.updatedAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="last Updated By:"></Tag>{" " +_entity?.updatedBy?.name}</p></div>
                <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(InvoiceCreateDialogComponent);
