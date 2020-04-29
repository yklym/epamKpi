import webapp2 as webapp
import os
import jinja2

def render(tpl_path, context = {}):
    path, filename = os.path.split(tpl_path)
    return jinja2.Environment(
        loader=jinja2.FileSystemLoader(path or './')
    ).get_template(filename).render(context)

class MainPage(webapp.RequestHandler): 
  
  _routes = ["welcome", "signup", "confirm"]
  
  def get(self):
    
    
    # Route the request to the appropriate template
    if self.request.path.endswith("signup"):
      self.response.out.write(render('signup.html', 
        {'next': self._check_route(self.request.get('next'))}))
    elif self.request.path.endswith("confirm"):
      self.response.out.write(render('confirm.html', 
        {'next': self._check_route(self.request.get('next', 'welcome'))}))
    elif self.request.path.endswith("welcome"):
      self.response.out.write(render('welcome.html', {}))
    else:
      self.response.out.write(render('welcome.html', {}))


    return
 
  def _check_route(self, route_string):
      if route_string not in self._routes:
        return self._routes[0]
      
      return route_string
  
application = webapp.WSGIApplication([ ('.*', MainPage), ], debug=False)

def main():
    from paste import httpserver
    httpserver.serve(application, host='127.0.0.1', port='8080')

if __name__ == '__main__':
    main()