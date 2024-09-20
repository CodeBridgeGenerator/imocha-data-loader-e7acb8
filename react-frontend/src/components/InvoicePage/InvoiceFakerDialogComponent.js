import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import invoiceFakerFactory from "./invoiceFakerFactory";

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
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

const InvoiceFakerDialogComponent = (props) => {
    const [fakerCount, setFakerCount] = useState(1);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [invoicetypeIds, setinvoicetypeIds] = useState();
const [identifiertypeIds, setidentifiertypeIds] = useState();
const [thefirstsuppliercontactnumberIds, setthefirstsuppliercontactnumberIds] = useState();
const [suppliercountrynameIds, setsuppliercountrynameIds] = useState();
const [supplierstatenameIds, setsupplierstatenameIds] = useState();
const [buyeridentifiertypeIds, setbuyeridentifiertypeIds] = useState();
const [buyercountrynameIds, setbuyercountrynameIds] = useState();
const [buyerstatenameIds, setbuyerstatenameIds] = useState();
const [thefirstbuyercontactnumberIds, setthefirstbuyercontactnumberIds] = useState();
const [invoicecurrencyIds, setinvoicecurrencyIds] = useState();
const [frequencyofbillingIds, setfrequencyofbillingIds] = useState();
const [paymentmodeIds, setpaymentmodeIds] = useState();
const [shippingrecipientidentifiertypeIds, setshippingrecipientidentifiertypeIds] = useState();
const [invoicelineclassificationIds, setinvoicelineclassificationIds] = useState();
const [measurementIds, setmeasurementIds] = useState();
const [countryoforiginIds, setcountryoforiginIds] = useState();
const [taxtypeIds, settaxtypeIds] = useState();
const [detailtaxtypeIds, setdetailtaxtypeIds] = useState();


    useEffect(() => {
        setFakerCount(1);
       
        client.service("identifyType")
                        .find({ query: { $select: ["_id","identifytype"] } })
                        .then((data) => {
                        setinvoicetypeIds(data.data);
                        });
client.service("identifyType")
                        .find({ query: { $select: ["_id","identifytype"] } })
                        .then((data) => {
                        setidentifiertypeIds(data.data);
                        });
client.service("phoneNumberPrefix")
                        .find({ query: { $select: ["_id","phonenumberprefix"] } })
                        .then((data) => {
                        setthefirstsuppliercontactnumberIds(data.data);
                        });
client.service("countryCode")
                        .find({ query: { $select: ["_id","countrycode"] } })
                        .then((data) => {
                        setsuppliercountrynameIds(data.data);
                        });
client.service("stateCode")
                        .find({ query: { $select: ["_id","statecode"] } })
                        .then((data) => {
                        setsupplierstatenameIds(data.data);
                        });
client.service("identifyType")
                        .find({ query: { $select: ["_id","identifytype"] } })
                        .then((data) => {
                        setbuyeridentifiertypeIds(data.data);
                        });
client.service("countryCode")
                        .find({ query: { $select: ["_id","countrycode"] } })
                        .then((data) => {
                        setbuyercountrynameIds(data.data);
                        });
client.service("stateCode")
                        .find({ query: { $select: ["_id","statecode"] } })
                        .then((data) => {
                        setbuyerstatenameIds(data.data);
                        });
client.service("phoneNumberPrefix")
                        .find({ query: { $select: ["_id","phonenumberprefix"] } })
                        .then((data) => {
                        setthefirstbuyercontactnumberIds(data.data);
                        });
client.service("currencyCode")
                        .find({ query: { $select: ["_id","currencycode"] } })
                        .then((data) => {
                        setinvoicecurrencyIds(data.data);
                        });
client.service("frequencyOfBilling")
                        .find({ query: { $select: ["_id","frequencyofbilling"] } })
                        .then((data) => {
                        setfrequencyofbillingIds(data.data);
                        });
client.service("paymentMode")
                        .find({ query: { $select: ["_id","paymentmode"] } })
                        .then((data) => {
                        setpaymentmodeIds(data.data);
                        });
client.service("identifyType")
                        .find({ query: { $select: ["_id","identifytype"] } })
                        .then((data) => {
                        setshippingrecipientidentifiertypeIds(data.data);
                        });
client.service("classificationCode")
                        .find({ query: { $select: ["_id","classificationcode"] } })
                        .then((data) => {
                        setinvoicelineclassificationIds(data.data);
                        });
client.service("measurement")
                        .find({ query: { $select: ["_id","measurement"] } })
                        .then((data) => {
                        setmeasurementIds(data.data);
                        });
client.service("countryCode")
                        .find({ query: { $select: ["_id","countrycode"] } })
                        .then((data) => {
                        setcountryoforiginIds(data.data);
                        });
client.service("taxType")
                        .find({ query: { $select: ["_id","taxtype"] } })
                        .then((data) => {
                        settaxtypeIds(data.data);
                        });
client.service("taxType")
                        .find({ query: { $select: ["_id","taxtype"] } })
                        .then((data) => {
                        setdetailtaxtypeIds(data.data);
                        });

    }, [props.show]);

    const onRun = async () => {
        let fakeData = invoiceFakerFactory(props.user,fakerCount,invoicetypeIds,identifiertypeIds,thefirstsuppliercontactnumberIds,suppliercountrynameIds,supplierstatenameIds,buyeridentifiertypeIds,buyercountrynameIds,buyerstatenameIds,thefirstbuyercontactnumberIds,invoicecurrencyIds,frequencyofbillingIds,paymentmodeIds,shippingrecipientidentifiertypeIds,invoicelineclassificationIds,measurementIds,countryoforiginIds,taxtypeIds,detailtaxtypeIds);

        setLoading(true);
        const promises = fakeData.map((elem) => client.service("invoice").create(elem));
        const results = await Promise.all(promises.map((p) => p.catch((e) => e)));
        const errors = results.filter((result) => result instanceof Error).map((err, index) => `[${index}] ${getSchemaValidationErrorsStrings(err) || "Failed to create fake record"}`);
        const validResults = results.filter((result) => !(result instanceof Error));
        props.alert({ type: "success", title: "Faker", message: "Faker ran successfully" });
        props.onFakerCreateResults(validResults);
        setErrors(errors);
        setLoading(false);
        if (!(errors && errors.length)) props.onHide();
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="run" className="p-button-text no-focus-effect" onClick={onRun} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const onChangeFakerCountHandler = (e) => {
        let val = e.target.value;
        val = Number(val);
        if (val < 1) val = 1;
        if (val > 100) val = 100;
        setFakerCount(val);
    };

    return (
        <Dialog header="Faker" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div>
                <div>
                    <p className="m-0">Faker count:</p>
                    <InputText className="w-full mb-3" type="number" value={fakerCount} onChange={onChangeFakerCountHandler} />
                </div>

                <small className="p-error">
                    {Array.isArray(errors)
                        ? errors.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : errors}
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

export default connect(mapState, mapDispatch)(InvoiceFakerDialogComponent);
