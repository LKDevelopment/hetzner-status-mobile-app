import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the HetznerStatusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HetznerStatusProviderMock {

  /**
   *
   * @type {string}
   */

  constructor(public http: HttpClient) {
  }

  /**
   * Get all Status from the LK-Network Hetzner Status API
   * @see https://hetzner-status.lkdev.co/api/hetzner-status
   * @returns {Promise<any>}
   */
  getStatus() {
    return this._get('hetzner-status')
  }

  /**
   * Performs a GET Request against the Hetzner API
   * @param {string} method
   * @returns {Promise<any>}
   * @private
   */
  _get(method: string) {
    return new Promise((resolve, reject = null) => {
      resolve([{
        id: 252,
        title: "Wartungsarbeiten Webhosting Server www104.your-server.de",
        text: "Wegen Wartungsarbeiten wird der Webhosting Server www104.your-server.de zum oben genannten Zeitraum nicht zu erreichen sein.<br /> Wir bitten um Ihr Verständnis.<br /><strong>Betroffen:</strong> Ob Ihre Domain davon betroffen ist, sehen Sie durch einen Blick in die konsoleH, dort steht dann z.B. unter 'Übersicht':<br /><br /> Hosting Server<br /> www104.your-server.de",
        category: "Webhosting und Managed Server",
        date_time: "20 February 2018, 3:57 pm",
        created_at: "2018-02-20 15:58:21",
        updated_at: "2018-02-20 15:58:21",
        external_id: "8251",
        parent_id: null,
        permalink: "http://www.hetzner-status.de/de.html#8251",
        language: "de",
        children: []
      },
        {
          id: 253,
          title: "Wartungsarbeiten Webhosting Server www104.your-server.de",
          text: "Wegen Wartungsarbeiten wird der Webhosting Server www104.your-server.de zum oben genannten Zeitraum nicht zu erreichen sein.<br /> Wir bitten um Ihr Verständnis.<br /><strong>Betroffen:</strong> Ob Ihre Domain davon betroffen ist, sehen Sie durch einen Blick in die konsoleH, dort steht dann z.B. unter 'Übersicht':<br /><br /> Hosting Server<br /> www104.your-server.de",
          category: "Webhosting und Managed Server",
          date_time: "20 February 2018, 3:57 pm",
          created_at: "2018-02-20 15:58:21",
          updated_at: "2018-02-20 15:58:21",
          external_id: "8251",
          parent_id: null,
          permalink: "http://www.hetzner-status.de/de.html#8251",
          language: "de",
          children: []
        }]);
    });
  }

}
