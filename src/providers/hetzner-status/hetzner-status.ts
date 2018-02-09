import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HetznerStatusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HetznerStatusProvider {

  /**
   *
   * @type {string}
   */
  public apiUrl: string = 'https://hetzner-status.lkdev.co/api' ;
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
      this.http.get(this.apiUrl + '/' + method).subscribe(data => {
        resolve(data);
      }, err => {
        if (reject != null) {
          reject(err);
        }
      });
    });
  }

}
