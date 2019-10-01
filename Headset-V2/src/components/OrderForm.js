import React from 'react';

class OrderForm extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            ponum: '',
            prod531: 0,
            prod532: 0,
            prod561sb: 0,
            prod561mb: 0,
            prod562sb: 0,
            prod562mb: 0,
            totalcount: 0,
            note: '',
            mailSent: false,
            error: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }
// Product 531
    handleIncProd531 = (e) => {
        e.preventDefault();
        if (this.state.prod531 > 9) {

        } else {
        this.setState({ prod531: this.state.prod531 + 1 });
        this.setState({ totalcount: this.state.totalcount + 1 });
        }
      }
      handleDecProd531 = (e) => {
        e.preventDefault();
        if (this.state.prod531 <= 0) {

        } else {
        this.setState({ prod531: this.state.prod531 - 1 });
        this.setState({ totalcount: this.state.totalcount - 1 });
        }
      }
// Product 532
        handleIncProd532 = (e) => {
            e.preventDefault();
            if (this.state.prod532 > 9) {

            } else {
            this.setState({ prod532: this.state.prod532 + 1 });
            this.setState({ totalcount: this.state.totalcount + 1 });
            }
        }
        handleDecProd532 = (e) => {
            e.preventDefault();
            if (this.state.prod532 <= 0) {

            } else {
            this.setState({ prod532: this.state.prod532 - 1 });
            this.setState({ totalcount: this.state.totalcount - 1 });
            }
        }
// Product 561 Standard Base
        handleIncProd561sb = (e) => {
            e.preventDefault();
            if (this.state.prod561sb > 9) {

            } else {
            this.setState({ prod561sb: this.state.prod561sb + 1 });
            this.setState({ totalcount: this.state.totalcount + 1 });
            }
        }
        handleDecProd561sb = (e) => {
            e.preventDefault();
            if (this.state.prod561sb <= 0) {

            } else {
            this.setState({ prod561sb: this.state.prod561sb - 1 });
            this.setState({ totalcount: this.state.totalcount - 1 });
            }
        }
// Product 561 Multi Base
        handleIncProd561mb = (e) => {
            e.preventDefault();
            if (this.state.prod561mb > 9) {

            } else {
            this.setState({ prod561mb: this.state.prod561mb + 1 });
            this.setState({ totalcount: this.state.totalcount + 1 });
            }
        }
        handleDecProd561mb = (e) => {
            e.preventDefault();
            if (this.state.prod561mb <= 0) {

            } else {
            this.setState({ prod561mb: this.state.prod561mb - 1 });
            this.setState({ totalcount: this.state.totalcount - 1 });
            }
        }
// Product 562 Standard Base
        handleIncProd562sb = (e) => {
            e.preventDefault();
            if (this.state.prod562sb > 9) {

            } else {
            this.setState({ prod562sb: this.state.prod562sb + 1 });
            this.setState({ totalcount: this.state.totalcount + 1 });
            }
        }
        handleDecProd562sb = (e) => {
            e.preventDefault();
            if (this.state.prod562sb <= 0) {

            } else {
            this.setState({ prod562sb: this.state.prod562sb - 1 });
            this.setState({ totalcount: this.state.totalcount - 1 });
            }
        }
// Product 562 Multi Base
        handleIncProd562mb = (e) => {
            e.preventDefault();
            if (this.state.prod562mb > 9) {

            } else {
            this.setState({ prod562mb: this.state.prod562mb + 1 });
            this.setState({ totalcount: this.state.totalcount + 1 });
            }
        }
        handleDecProd562mb = (e) => {
            e.preventDefault();
            if (this.state.prod562mb <= 0) {

            } else {
            this.setState({ prod562mb: this.state.prod562mb - 1 });
            this.setState({ totalcount: this.state.totalcount - 1 });
            }
        }

      render() {
          return (

            <div>
                <div>
                <h3>Cisco Headset Order Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="fname"
                        type="text"
                        name="fname"
                        placeholder="first name"
                        required
                        value={this.state.fname}
                        onChange={e => this.setState({ fname: e.target.value })}
                    />
                    <input
                        id="lname"
                        type="text"
                        name="last name"
                        placeholder="last name"
                        required
                        value={this.state.lname}
                        onChange={e => this.setState({ lname: e.target.value })}
                    />
                    <input
                        id="phone"
                        type="text"
                        name="phone number"
                        placeholder="phone number"
                        required
                        value={this.state.phone}
                        onChange={e => this.setState({ phone: e.target.value })}
                    />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email"
                        required
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        id="ponum"
                        type="text"
                        name="po number"
                        placeholder="po number"
                        required
                        value={this.state.ponum}
                        onChange={e => this.setState({ ponum: e.target.value })}
                    />
                    <div>
                    <div>
                        <img src="../../images/531.png" width='10%' />
                        <p>Cisco Headset 531</p>
                        <p>This is a single-ear, wired headset.</p>
                        <a>MORE</a>
                        <input
                            type="text"
                            name="productnumber"
                            placeholder="CP-HS-W-531-RJ="
                            value="CP-HS-W-531-RJ="
                            disabled="disabled"
                        />
                        <button 
                        onClick={ this.handleIncProd531 }>+</button>
                        <input
                            id="prod531"
                            type="text"
                            name="prod531 amount"
                            value={this.state.prod531}
                            onChange={e => this.setState({ prod531: e.target.value })}
                        />
                        <button onClick={ this.handleDecProd531 }>-</button>
                    </div>
                    {/*  spacer */}
                    <div>
                        <img src="../../images/532.png" width='10%' />
                        <p>Cisco Headset 532</p>
                        <p>This is a dual-ear, wired headset.</p>
                        <a>MORE</a>
                        <input
                            type="text"
                            name="productnumber"
                            placeholder="CP-HS-W-532-RJ="
                            value="CP-HS-W-532-RJ="
                            disabled="disabled"
                        />
                        <button onClick={ this.handleIncProd532 }>+</button>
                        <input
                            id="prod532"
                            type="text"
                            name="prod532 amount"
                            value={this.state.prod532}
                            onChange={e => this.setState({ prod532: e.target.value })}
                        />
                        <button onClick={ this.handleDecProd532 }>-</button>
                    </div>
                    {/* spacer */}
                    <div>
                        <img src="../../images/561sb.png" width='10%' />
                        <p>Cisco Headset 561 (Standard)</p>
                        <p>This is a single-ear, wireless headset with a Standard Base.</p>
                        <a>MORE</a>
                        <input
                            type="text"
                            name="productnumber"
                            placeholder="CP-HS-WL-561-S-US="
                            value="CP-HS-WL-561-S-US="
                            disabled="disabled"
                        />
                        <button onClick={ this.handleIncProd561sb }>+</button>
                        <input
                            id="prod561sb"
                            type="text"
                            name="prod561sb amount"
                            value={this.state.prod561sb}
                            onChange={e => this.setState({ prod561sb: e.target.value })}
                        />
                        <button onClick={ this.handleDecProd561sb }>-</button>
                    </div>
                    {/* spacer */}
                    <div>
                        <img src="../../images/561mb.png" width='10%' />
                        <p>Cisco Headset 561 (Multibase)</p>
                        <p>This is a single-ear, wireless headset with a Multi-Base.</p>
                        <a>MORE</a>
                        <input
                            type="text"
                            name="productnumber"
                            placeholder="CP-HS-WL-561-M-US="
                            value="CP-HS-WL-561-M-US="
                            disabled="disabled"
                        />
                        <button onClick={ this.handleIncProd561mb }>+</button>
                        <input
                            id="prod561mb"
                            type="text"
                            name="prod561mb amount"
                            value={this.state.prod561mb}
                            onChange={e => this.setState({ prod561mb: e.target.value })}
                        />
                        <button onClick={ this.handleDecProd561mb }>-</button>
                    </div>
                    {/* spacer */}
                    <div>
                        <img src="../../images/562sb.png" width='10%' />
                        <p>Cisco Headset 562 (Standard)</p>
                        <p>This is a single-ear, wireless headset with a Standard Base.</p>
                        <a>MORE</a>
                        <input
                            type="text"
                            name="productnumber"
                            placeholder="CP-HS-WL-562-S-US="
                            value="CP-HS-WL-562-S-US="
                            disabled="disabled"
                        />
                        <button onClick={ this.handleIncProd562sb }>+</button>
                        <input
                            id="prod562sb"
                            type="text"
                            name="prod562sb amount"
                            value={this.state.prod562sb}
                            onChange={e => this.setState({ prod562sb: e.target.value })}
                        />
                        <button onClick={ this.handleDecProd562sb }>-</button>
                    </div>
                    {/* spacer */}
                    <div>
                        <img src="../../images/562mb.png" width='10%' />
                        <p>Cisco Headset 562 (Multibase)</p>
                        <p>This is a dual-ear, wireless headset with a Multi-Base.</p>
                        <a>MORE</a>
                        <input
                            type="text"
                            name="productnumber"
                            placeholder="CP-HS-WL-562-M-US="
                            value="CP-HS-WL-562-M-US="
                            disabled="disabled"
                        />
                        <button onClick={ this.handleIncProd562mb }>+</button>
                        <input
                            id="prod562mb"
                            type="text"
                            name="562mb amount"
                            value={this.state.prod562mb}
                            onChange={e => this.setState({ prod562mb: e.target.value })}
                        />
                        <button onClick={ this.handleDecProd562mb }>-</button>
                    </div>
                    <textarea
                        id="note"
                        names="note"
                        placeholder="notes"
                        value={this.state.note}
                        onChange={e => this.setState({ note: e.target.value })}
                    >
                    </textarea>
                    <p>
                        Total: <input
                            id="totalcount"
                            type="text"
                            name="total"
                            value={this.state.totalcount}
                            onChange={e => this.setState({ totalcount: e.target.value })}
                        />
                        <button>
                            Submit
                        </button>
                    </p>
                </div>
                </form>
                </div>
            </div>
          );
      }
    }

    export default OrderForm;